CREATE TABLE IF NOT EXISTS "image" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp,
	"filename" text,
	"public_id" text,
	"public_url" text,
	"group_id" integer
);
