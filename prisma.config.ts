import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    // `prisma db seed` runs this.
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // This config is read by the Prisma CLI only — the app connects through
    // src/lib/db.ts using DATABASE_URL (the pooled connection).
    //
    // Migrations must NOT go through a transaction pooler, because DDL and
    // advisory locks do not survive PgBouncer. So the CLI gets DIRECT_URL.
    url: process.env["DIRECT_URL"] ?? process.env["DATABASE_URL"],
    ...(process.env["SHADOW_DATABASE_URL"]
      ? { shadowDatabaseUrl: process.env["SHADOW_DATABASE_URL"] }
      : {}),
  },
});
