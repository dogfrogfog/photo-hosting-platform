import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("group", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
