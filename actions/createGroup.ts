import { revalidatePath } from "next/cache";

import { db, group } from "@/db";

export async function createGroup(form: any) {
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
