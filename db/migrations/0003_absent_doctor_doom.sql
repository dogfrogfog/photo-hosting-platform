CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"clerk_id" text,
	"first_name" text,
	"last_name" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
