import { auth } from "@clerk/nextjs";
import { format } from "date-fns";
import { eq } from "drizzle-orm";
import Link from "next/link";

import { DeleteAndConfirm } from "@/components/DeleteAndConfirm";
import { ImagesGallery } from "@/components/ImagesGallery";
import { UploadButton } from "@/components/UploadButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db, group } from "@/db";

import { redirect } from "next/navigation";

export const revalidate = 3600;

export default async function GroupPage({ params: { slug } }: any) {
  async function deleteGroup() {
    "use server";
    const { userId } = auth();

    if (!userId) {
      throw new Error("You must be signed in to delete group");
    }

    await db.delete(group).where(eq(group.slug, slug));

    redirect("/gallery");
  }

  const groupData = await db.query.group.findFirst({
    where: eq(group.slug, slug),
  });
  const { userId } = auth();

  async function uploadGroupImages({ urls }: { urls: string[] }) {
    "use server";
    const currentGroup = await db
      .select({
        photosUrls: group.photosUrls,
      })
      .from(group)
      .where(eq(group.slug, slug));

    const existingImagesUrls = currentGroup[0]?.photosUrls || [];

    await db
      .update(group)
      .set({
        photosUrls: [...existingImagesUrls, ...urls],
        updatedAt: new Date(),
      })
      .where(eq(group.slug, slug));
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">name: {groupData?.name}</h1>
        {groupData?.userClerkId === userId && (
          <div className="flex flex-row gap-2">
            <UploadButton uploadGroupImages={uploadGroupImages} />
            <Button asChild variant={"outline"}>
              <Link href={`/g/${slug}/edit`} className="!m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </Link>
            </Button>
            <DeleteAndConfirm deleteGroup={deleteGroup} />
          </div>
        )}
      </div>
      <Separator className="my-6" />
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
    </>
  );
}
