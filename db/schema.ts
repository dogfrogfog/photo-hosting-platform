import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const group = pgTable("group", {
  id: serial("id"),
  name: text("name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const user = pgTable("user", {
  id: serial("id"),
  clerkId: text("clerk_id"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});