ALTER TABLE "group" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group" ADD CONSTRAINT "group_user_clerk_id_user_clerk_id_fk" FOREIGN KEY ("user_clerk_id") REFERENCES "user"("clerk_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "group" ADD CONSTRAINT "group_slug_unique" UNIQUE("slug");