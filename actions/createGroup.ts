import { auth } from "@clerk/nextjs";
import hash from "hash-it";
import { revalidatePath } from "next/cache";

import { db, group } from "@/db";

export async function createGroup(form: any) {
  "use server";
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in to create new group");
  }

  const [{ slug }] = await db
    .insert(group)
    .values({
      ...form,
      slug: hash(userId + form.name + Date.now()),
      createdAt: new Date(),
      updatedAt: new Date(),
      userClerkId: userId,
    })
    .returning({ slug: group.slug });

  revalidatePath(`/gallery`);

  return { slug };
}
