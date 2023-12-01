import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const group = pgTable("group", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  filmModel: text("film_model"),
  to: timestamp("to"),
  from: timestamp("from"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  photosUrls: text("photos_urls").array(),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
