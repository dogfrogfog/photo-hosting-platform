import { Suspense } from "react";

import { GallerySkeleton } from "@/components/GallerySkeleton";
import { GroupsGallery } from "@/components/GroupsGallery";

export const revalidate = 3600;

export default function PersonalGallery() {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      {/* @ts-ignore */}
      <GroupsGallery />
    </Suspense>
  );
}
