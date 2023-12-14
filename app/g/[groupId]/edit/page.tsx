import { revalidatePath } from "next/cache";

import { GroupForm } from "@/components/GroupForm";

async function editGroup({ id, ...form }: any) {
  "use server";
  const [{ groupId }] = await db
    .update(group)
    .set(form)
    .where(eq(group.id, id))
    .returning({ groupId: group.id });
  return { groupId };
}

import { db, group } from "@/db";
import { eq } from "drizzle-orm";

export default async function UpdateGroup({ params: { groupId } }: any) {
  const groupData = await db.query.group.findFirst({
    where: eq(group.id, groupId),
  });

  async function handleSubmit(values: any) {
    "use server";

    if (groupData?.id) {
      const updatedGroup = await editGroup({
        ...values,
        photosUrls: groupData?.photosUrls,
        id: groupData.id,
      });

      revalidatePath(`/g/${updatedGroup.groupId}`);

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
