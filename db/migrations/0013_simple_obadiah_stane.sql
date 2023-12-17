DROP TABLE "image";--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "user_id" integer;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_clerk_id_unique" UNIQUE("clerk_id");--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");