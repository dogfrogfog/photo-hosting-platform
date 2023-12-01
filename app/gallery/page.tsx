import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Suspense } from "react";

import { GroupsGallery } from "@/components/GroupsGallery";

export default function PersonalGallery() {
  return (
    <>
      <h1 className="mb-24 text-3xl font-semibold">Groups of photos</h1>
      {/* actions */}
      <div className="flex justify-between">
        <Button>
          <Link href="/g/new">Add new group</Link>
        </Button>
        <Button variant="outline">Filter 1</Button>
      </div>
      <Separator className="my-6" />
      <Suspense fallback={"loading..."}>
        {/* @ts-ignore */}
        <GroupsGallery />
      </Suspense>
    </>
  );
}
