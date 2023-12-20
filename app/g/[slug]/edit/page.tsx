import { GroupForm } from "@/components/GroupForm";
import { db, group } from "@/db";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";

import { Separator } from "@/components/ui/separator";

export default async function UpdateGroup({ params: { slug } }: any) {
  const groupData = await db.query.group.findFirst({
    where: eq(group.slug, slug),
  });
  const { userId } = auth();

  if (!userId || groupData?.userClerkId !== userId) {
    redirect("/");
  }

  async function handleSubmit(values: any) {
    "use server";
    if (groupData?.id) {
      const { userId } = auth();

      console.log("server hit");

      if (!userId) {
        throw new Error("You must be signed in to update group");
      }

      const form = {
        ...values,
        photosUrls: groupData?.photosUrls,
      };

      const [{ slug }] = await db
        .update(group)
        .set(form)
        .where(eq(group.id, groupData.id))
        .returning({ slug: group.slug });

      revalidatePath(`/g/${slug}`);

      return { slug };
    }
  }

  return (
    <>
      <h1 className="text-3xl font-semibold">
        Edit <span className="italic">{groupData?.name}</span> Album
      </h1>
      <Separator className="my-6" />
      <GroupForm initialData={groupData} onSubmit={handleSubmit} />
    </>
  );
}
