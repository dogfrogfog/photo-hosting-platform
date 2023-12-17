import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db, group } from "@/db";

export async function updateGroup({ id, ...form }: any) {
  "use server";
  const [{ groupId }] = await db
    .update(group)
    .set(form)
    .where(eq(group.id, id))
    .returning({ groupId: group.id });

  revalidatePath(`/g/${groupId}`);

  return { groupId };
}
