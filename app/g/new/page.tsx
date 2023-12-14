import { revalidatePath } from "next/cache";

import { GroupForm } from "../../../components/GroupForm";

import { db, group } from "@/db";
async function createGroup(form: any) {
  "use server";
  const [{ groupId }] = await db
    .insert(group)
    .values({
      ...form,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning({ groupId: group.id });

  revalidatePath(`/gallery`);

  return { groupId };
}

export default function NewGroup() {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">New group</h1>
      <GroupForm onSubmit={createGroup} />
    </main>
  );
}
