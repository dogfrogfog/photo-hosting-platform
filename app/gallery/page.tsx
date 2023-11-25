import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";

import { db, group } from "@/db";

export const revalidate = 30;
// export const dynamic = "force-dynamic";

export default function PersonalGallery() {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">Groups of photos</h1>
      <div className="mb-12 rounded-xl bg-slate-600 p-6">
        <Link href="/g/new" className="bg-white p-2">
          Add new group
        </Link>
      </div>
      <Suspense fallback={"loading..."}>
        {/* @ts-ignore */}
        <Groups />
      </Suspense>
    </main>
  );
}

async function Groups() {
  const data = await db.select().from(group);

  console.log("data");
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map(({ id, name, description, createdAt, filmModel, to, from }) => (
        <Link href={`/g/${id}`} key={id}>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              {filmModel}
              {/* {to} - {from} */}
              <span className="text-xs">
                created at:{createdAt?.toDateString()}
              </span>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
