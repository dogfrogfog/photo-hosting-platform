ALTER TABLE "group" ADD COLUMN "photos_urls" text[];--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "photos_urls";