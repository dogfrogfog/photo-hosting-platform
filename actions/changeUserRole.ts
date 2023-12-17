import { db, user } from "@/db";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export async function changeUserRole({ code }: any) {
  "use server";
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not logged in");
  }

  if (code !== process.env.PREMIUM_CODE) {
    throw new Error("Code is incorrect");
  }

  await db
    .update(user)
    .set({
      role: "premium",
      updatedAt: new Date(),
    })
    .where(eq(user.clerkId, userId));
}
