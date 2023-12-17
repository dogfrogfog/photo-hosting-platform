ALTER TABLE "group" RENAME COLUMN "user_id" TO "user_clerk_id";--> statement-breakpoint
ALTER TABLE "group" ALTER COLUMN "user_clerk_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "group" ALTER COLUMN "user_clerk_id" SET NOT NULL;