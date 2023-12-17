import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { db, group } from "@/db";

export async function deleteGroup(groupId: number) {
  "use server";
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in to delete group");
  }

  await db.delete(group).where(eq(group.id, groupId));

  redirect("/gallery");
}
