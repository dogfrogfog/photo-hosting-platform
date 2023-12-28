import { Suspense } from "react";

import { GallerySkeleton } from "@/components/GallerySkeleton";
import { GroupsGallery } from "@/components/GroupsGallery";
import { HeroBlock } from "@/components/HeroBlock";

export const revalidate = 3600;

export default async function Home() {
  return (
    <>
      <HeroBlock />
      <div
        id="publicGallery"
        className="scroll-top mb-6 mt-12 scroll-mt-6 text-3xl font-bold tracking-tighter text-slate-900"
      >
        Public Series
      </div>
      <Suspense fallback={<GallerySkeleton />}>
        {/* @ts-ignore */}
        <GroupsGallery onlyPublicGroups />
      </Suspense>
    </>
  );
}
