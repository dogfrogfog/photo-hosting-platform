import { updateGroup } from "@/actions/updateGroup";
import { GroupForm } from "@/components/GroupForm";
import { db, group } from "@/db";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function UpdateGroup({ params: { groupId } }: any) {
  const groupData = await db.query.group.findFirst({
    where: eq(group.id, groupId),
  });
  const { userId } = auth();

  if (!userId || groupData?.userClerkId !== userId) {
    redirect("/");
  }

  console.log(groupData);

  async function handleSubmit(values: any) {
    "use server";

    if (groupData?.id) {
      const updatedGroup = await updateGroup({
        ...values,
        photosUrls: groupData?.photosUrls,
        id: groupData.id,
      });

      return updatedGroup;
    }
  }

  return (
    <>
      <h1 className="mb-12 text-3xl font-semibold">
        Edit {`"${groupData?.name}"`} group
      </h1>
      <GroupForm initialData={groupData} onSubmit={handleSubmit} />
    </>
  );
}
