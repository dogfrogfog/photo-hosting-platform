ALTER TABLE "group" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "group" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "group" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "clerk_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "role" DROP NOT NULL;