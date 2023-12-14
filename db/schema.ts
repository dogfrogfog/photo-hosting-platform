import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

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
  public: boolean("public").default(false),
});

export const image = pgTable("image", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at"),
  filename: text("filename"),
  publicId: text("public_id"),
  publicUrl: text("public_url"),
  groupId: integer("group_id"),
});

export const groupsRelations = relations(group, ({ many }) => ({
  images: many(image),
}));

export const imagesRelations = relations(image, ({ one }) => ({
  group: one(group, {
    fields: [image.groupId],
    references: [group.id],
  }),
}));

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  role: text("role").default("user"),
});
