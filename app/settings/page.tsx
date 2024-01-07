import { UserRoleForm } from "@/components/UserRoleForm";
import { db, user } from "@/db";
import {
  auth,
  clerkClient,
  currentUser as getCurrentUser,
} from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function SettingsPage() {
  const currentUser = await getCurrentUser();

  async function changeUserRole({ code }: any) {
    "use server";
    const { userId } = auth();

    if (!userId) {
      throw new Error("User not logged in");
    }

    if (code !== process.env.PREMIUM_CODE) {
      throw new Error("Code is incorrect");
    }

    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        role: "premium",
      },
    });

    await db
      .update(user)
      .set({
        role: "premium",
        updatedAt: new Date(),
      })
      .where(eq(user.clerkId, userId));

    revalidatePath("/");
  }

  return (
    <UserRoleForm
      isPremiumUser={currentUser?.privateMetadata.role === "premium"}
      onSubmit={changeUserRole}
    />
  );
}
