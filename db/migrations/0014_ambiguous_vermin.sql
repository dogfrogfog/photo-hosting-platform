ALTER TABLE "group" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "group" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "group" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "clerk_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "role" SET NOT NULL;