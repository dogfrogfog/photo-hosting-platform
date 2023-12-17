import { createGroup } from "@/actions/createGroup";
import { GroupForm } from "@/components/GroupForm";
import { db, user } from "@/db";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export default async function NewGroup() {
  const { userId } = auth();

  if (!userId) {
    return "you can create group only if you are logged in";
  }

  const currentUser = await db.query.user.findFirst({
    where: eq(user.clerkId, userId),
    columns: {
      role: true,
    },
  });

  if (currentUser?.role !== "premium") {
    return "only premium users can create groups, upgrade to premium";
  }

  return (
    <main className="p-12">
      <h1 className="mb-6 text-3xl font-semibold">New group</h1>
      <GroupForm onSubmit={createGroup} />
    </main>
  );
}
