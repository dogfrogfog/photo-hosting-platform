import { format } from "date-fns";
import { eq } from "drizzle-orm";

import { GalleryImage } from "@/components/GalleryImage";
import { UploadButton } from "@/components/UploadButton";
import { db, group } from "@/db";

export default async function GroupPage({ params: { groupId } }: any) {
  const groupData = await db.query.group.findFirst({
    where: eq(group.id, groupId),
  });

  async function uploadGroupImages({ urls }: { urls: string[] }) {
    "use server";
    const currentGroup = await db
      .select({
        photosUrls: group.photosUrls,
      })
      .from(group)
      .where(eq(group.id, groupId));

    const existingImagesUrls = currentGroup[0]?.photosUrls || [];

    await db
      .update(group)
      .set({
        photosUrls: [...existingImagesUrls, ...urls],
      })
      .where(eq(group.id, groupId));
  }

  return (
    <main className="p-12">
      <h1 className="mb-4 text-3xl font-bold">name: {groupData?.name}</h1>
      <h2 className="mb-4 text-xl font-bold">
        description: {groupData?.description}
      </h2>
      <p className="mb-4">film: {groupData?.filmModel}</p>
      {groupData?.from && groupData?.to && (
        <p className="text-md mb-12">
          from{" "}
          <span className="italic">
            {format(new Date(groupData.from), "dd-MM-yyyy")} -
          </span>{" "}
          to{" "}
          <span className="italic">
            {format(new Date(groupData.to), "dd-MM-yyyy")}
          </span>
        </p>
      )}
      <UploadButton uploadGroupImages={uploadGroupImages} className="mb-12" />
      <div className="grid grid-cols-3 gap-6">
        {groupData?.photosUrls?.map((url: string) => (
          <GalleryImage url={url} key={url} />
        ))}
        <h2 className="mb-4 text-xl">taken shots</h2>
      </div>
    </main>
  );
}
