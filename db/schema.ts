import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const group = pgTable("group", {
  id: serial("id"),
  name: text("name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
