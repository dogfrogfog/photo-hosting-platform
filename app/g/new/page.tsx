import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { GroupForm } from "@/components/GroupForm";
import { Separator } from "@/components/ui/separator";

import { auth } from "@clerk/nextjs";
import hash from "hash-it";
import { revalidatePath } from "next/cache";

import { db, group } from "@/db";

export default async function NewGroup() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  if (user.privateMetadata?.role !== "premium") {
    return "only premium users can create groups, upgrade to premium";
  }

  async function createGroup(form: any) {
    "use server";
    const { userId } = auth();

    if (!userId) {
      throw new Error("You must be signed in to create new album");
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

  return (
    <>
      <h1 className="text-3xl font-semibold">New album</h1>
      <Separator className="my-6" />
      <GroupForm onSubmit={createGroup} />
    </>
  );
}
