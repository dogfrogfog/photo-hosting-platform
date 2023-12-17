import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Suspense } from "react";

import { GroupsGallery } from "@/components/GroupsGallery";

export default function PersonalGallery() {
  return (
    <>
      <div className="mb-12 flex justify-between">
        <h1 className="text-3xl font-semibold">Groups of photos</h1>
        <Button>
          <Link href="/g/new">Add new group</Link>
        </Button>
      </div>
      <Separator className="my-6" />
      <Suspense fallback={"loading..."}>
        {/* @ts-ignore */}
        <GroupsGallery />
      </Suspense>
    </>
  );
}
