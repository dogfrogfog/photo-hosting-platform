import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const postgresClient = postgres(process.env.DATABASE_URL || "");

export const db = drizzle(postgresClient, { schema });

export * from "./schema";
