import { deleteGroup } from "@/actions/deleteGroup";
import { auth } from "@clerk/nextjs";
import { format } from "date-fns";
import { eq } from "drizzle-orm";
import Link from "next/link";

import { DeleteAndConfirm } from "@/components/DeleteAndConfirm";
import { ImagesGallery } from "@/components/ImagesGallery";
import { UploadButton } from "@/components/UploadButton";
import { Button } from "@/components/ui/button";
import { db, group } from "@/db";

export default async function GroupPage({ params: { groupId } }: any) {
  const groupData = await db.query.group.findFirst({
    where: eq(group.id, groupId),
  });
  const { userId } = auth();

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
        updatedAt: new Date(),
      })
      .where(eq(group.id, groupId));
  }

  async function handleDeleteGroup() {
    "use server";
    await deleteGroup(groupId);
  }

  return (
    <main className="p-12">
      <div className="flex justify-between">
        <h1 className="mb-4 text-3xl font-bold">name: {groupData?.name}</h1>
        {groupData?.userClerkId === userId && (
          <div className="space-x-4">
            <UploadButton uploadGroupImages={uploadGroupImages} />
            <Button asChild variant={"outline"}>
              <Link href={`/g/${groupId}/edit`}>Edit</Link>
            </Button>
            <DeleteAndConfirm deleteGroup={handleDeleteGroup} />
          </div>
        )}
      </div>
      <h2 className="mb-4 text-xl font-bold">
        description: {groupData?.description}
      </h2>
      <p className="mb-4">public: {groupData?.public ? "true" : "false"}</p>
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
      <ImagesGallery photoUrls={groupData?.photosUrls || []} />
    </main>
  );
}
