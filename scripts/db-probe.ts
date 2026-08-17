import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

/** Measures round-trip latency to the database. `pnpm db:probe` */
async function main() {
  const prisma = new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL,
      max: 1,
      connectionTimeoutMillis: 30_000,
    }),
  });

  for (let i = 1; i <= 3; i++) {
    const t = Date.now();
    const n = await prisma.service.count();
    console.log(`  query ${i}: ${n} services in ${Date.now() - t}ms`);
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("probe failed:", e instanceof Error ? e.message : e);
  process.exit(1);
});
