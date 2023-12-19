import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db, group } from "@/db";

export async function updateGroup({ id, ...form }: any) {
  "use server";
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in to update group");
  }

  const [{ slug }] = await db
    .update(group)
    .set(form)
    .where(eq(group.id, id))
    .returning({ slug: group.slug });

  revalidatePath(`/g/${slug}`);

  return { slug };
}
