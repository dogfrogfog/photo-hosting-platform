import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db, group } from "@/db";
import { currentUser } from "@clerk/nextjs";
import { format } from "date-fns";
import { desc, eq } from "drizzle-orm";
import { boolean } from "drizzle-orm/mysql-core";
import Link from "next/link";

export async function GroupsGallery(
  { onlyPublicGroups = false } = { onlyPublicGroups: boolean },
) {
  const user = await currentUser();

  if (!onlyPublicGroups && !user) {
    return "Auth error";
  }

  const data = await db
    .select()
    .from(group)
    .where(
      onlyPublicGroups
        ? eq(group.public, true)
        : // @ts-ignore
          eq(group.userClerkId, user.id),
    )
    .orderBy(desc(group.updatedAt));

  return (
    <div className="grid grid-cols-2 gap-6 xl:grid-cols-3">
      {data.map(
        ({ slug, name, description, createdAt, filmModel, to, from }) => (
          <Link
            href={`/g/${slug}`}
            key={slug}
            className="col-span-2 md:col-span-1"
          >
            <Card>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col space-y-1.5">
                <span className="text-md block">{filmModel}</span>
                <span className="text-md block">
                  from{" "}
                  <span className="italic">
                    {/* @ts-ignore */}
                    {format(new Date(from), "dd-MM-yyyy")} -
                  </span>{" "}
                  to{" "}
                  <span className="italic">
                    {/* @ts-ignore */}
                    {format(new Date(to), "dd-MM-yyyy")}
                  </span>
                </span>
              </CardContent>
              <CardFooter className="text-xs">
                created at: {createdAt && format(createdAt, "dd-MM-yyyy")}
              </CardFooter>
            </Card>
          </Link>
        ),
      )}
    </div>
  );
}
