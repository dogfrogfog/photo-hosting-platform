import { relations } from "drizzle-orm";
import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

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
  userClerkId: text("user_clerk_id")
    .references(() => user.clerkId, { onDelete: "cascade" })
    .notNull(),
  slug: text("slug").unique().notNull(),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  clerkId: text("clerk_id").unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").unique(),
  role: text("role").default("user"),
});

export const userRelations = relations(user, ({ many }) => ({
  groups: many(group),
}));

export const groupRelations = relations(group, ({ one }) => ({
  user: one(user, {
    fields: [group.userClerkId],
    references: [user.clerkId],
  }),
}));
