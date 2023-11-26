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
      <div>
        <Button>
          <Link href="/g/new">Add new group</Link>
        </Button>
      </div>
      <Separator className="my-6" />
      {/* filters */}
      <div className="mb-6 flex justify-end gap-3">
        <Button variant="outline" size={"sm"}>
          Filter 1
        </Button>
        <Button variant="outline" size={"sm"}>
          Filter 2
        </Button>
      </div>
      <Suspense fallback={"loading..."}>
        {/* @ts-ignore */}
        <GroupsGallery />
      </Suspense>
    </>
  );
}
