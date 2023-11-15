import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "pg",
  verbose: true,
  strict: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "",
  },
});
