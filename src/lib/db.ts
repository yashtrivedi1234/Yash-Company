import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

/**
 * Prisma client singleton.
 *
 * Next.js hot-reloads modules in development, which would otherwise open a new
 * connection pool on every save until Postgres refuses new clients. Stashing
 * the instance on globalThis keeps exactly one pool alive across reloads.
 *
 * Prisma 7 requires an explicit driver adapter; PrismaPg is the node-postgres
 * one and works with both Neon and Supabase poolers.
 */

/**
 * `next build` fans out across one worker process per core, and each worker
 * instantiates this module with its own pool. Multiply a default-sized pool by
 * 7 workers and the connection limit is gone before the first page renders —
 * the build then dies mid-export with P1017 ConnectionClosed.
 *
 * During the build each worker renders pages sequentially, so one connection
 * each is genuinely enough. At runtime a small pool is still right: on Vercel
 * every serverless instance holds its own, and the pooler is what does the
 * real multiplexing.
 */
const isBuild = process.env.NEXT_PHASE === "phase-production-build";

const createClient = () => {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
    max: isBuild ? 1 : 3,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 20_000,
    // Poolers drop idle connections without notice; keepalive stops the client
    // handing out an already-dead socket.
    keepAlive: true,
  });

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["warn", "error"]
        : ["error"],
  });
};

const globalForPrisma = globalThis as unknown as {
  prisma?: ReturnType<typeof createClient>;
};

export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
