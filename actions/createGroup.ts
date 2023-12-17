import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db, group } from "@/db";

export async function createGroup(form: any) {
  "use server";
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in to create new group");
  }

  const [{ groupId }] = await db
    .insert(group)
    .values({
      ...form,
      createdAt: new Date(),
      updatedAt: new Date(),
      userClerkId: userId,
    })
    .returning({ groupId: group.id });

  revalidatePath(`/gallery`);

  return { groupId };
}
