import { format } from "date-fns";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DeleteAndConfirm } from "@/components/DeleteAndConfirm";
import { ImagesGallery } from "@/components/ImagesGallery";
import { UploadButton } from "@/components/UploadButton";
import { Button } from "@/components/ui/button";
import { db, group } from "@/db";
import { SignedIn } from "@clerk/nextjs";

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
        updatedAt: new Date(),
      })
      .where(eq(group.id, groupId));
  }

  async function deleteGroup() {
    "use server";
    await db.delete(group).where(eq(group.id, groupId));

    redirect("/gallery");
  }

  return (
    <main className="p-12">
      <div className="flex justify-between">
        <h1 className="mb-4 text-3xl font-bold">name: {groupData?.name}</h1>
        <SignedIn>
          <div className="space-x-4">
            <UploadButton uploadGroupImages={uploadGroupImages} />
            <Button asChild variant={"outline"}>
              <Link href={`/g/${groupId}/edit`}>Edit</Link>
            </Button>
            <DeleteAndConfirm deleteGroup={deleteGroup} />
          </div>
        </SignedIn>
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
