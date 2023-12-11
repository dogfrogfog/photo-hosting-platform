ALTER TABLE "group" ALTER COLUMN "public" SET DEFAULT null;
ALTER TABLE "group" ALTER COLUMN "public" SET DATA TYPE boolean USING public::boolean;
ALTER TABLE "group" ALTER COLUMN "public" SET DEFAULT false;