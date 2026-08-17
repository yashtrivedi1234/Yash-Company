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
 * Pool sizing.
 *
 * `next build` fans out across one worker process per core, and each worker
 * instantiates this module with its own pool — so the effective connection
 * count is `max × workers`, not `max`.
 *
 * The right value depends entirely on what is on the other end:
 *
 *  - **A pooler (Neon/Supabase `-pooler` host):** PgBouncer multiplexes
 *    thousands of client connections, so a healthy per-worker pool is correct.
 *    Starving it is actively harmful — concurrent `unstable_cache`
 *    revalidations queue behind a single connection and time out, which turned
 *    a 0.8s build into a 61s one with 622 connection errors.
 *  - **A direct Postgres connection:** the server's own `max_connections` is
 *    the ceiling, and a local dev server may allow as few as 10 in total.
 *
 * Default to the pooled case and let a direct connection dial it down.
 */
const DEFAULT_POOL_MAX = 5;

const poolMax = process.env.DB_POOL_MAX
  ? Number(process.env.DB_POOL_MAX)
  : DEFAULT_POOL_MAX;

const createClient = () => {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
    max: poolMax,
    idleTimeoutMillis: 10_000,
    // Neon free-tier compute auto-suspends and cold-starts on the first
    // connection, which can take several seconds.
    connectionTimeoutMillis: 30_000,
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
