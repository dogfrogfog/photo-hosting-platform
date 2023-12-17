import { Suspense } from "react";

import { GroupsGallery } from "@/components/GroupsGallery";

export default async function Home() {
  return (
    <>
      <h1 className="mb-12 text-3xl font-semibold">home page</h1>
      <Suspense fallback={"loading..."}>
        {/* @ts-ignore */}
        <GroupsGallery onlyPublicGroups />
      </Suspense>
    </>
  );
}
