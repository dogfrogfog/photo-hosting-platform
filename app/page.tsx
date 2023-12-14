import { Suspense } from "react";

import { GroupsGallery } from "@/components/GroupsGallery";

export default async function Home() {
  return (
    <main className="p-12">
      <h1 className="mb-6 text-3xl font-semibold">home page</h1>
      <p className="mb-12">Showing only public groups</p>
      <Suspense fallback={"loading..."}>
        {/* @ts-ignore */}
        <GroupsGallery onlyPublicGroups={true} />
      </Suspense>
    </main>
  );
}
