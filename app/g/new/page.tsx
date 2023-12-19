import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { createGroup } from "@/actions/createGroup";
import { GroupForm } from "@/components/GroupForm";
import { Separator } from "@/components/ui/separator";

export default async function NewGroup() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  if (user.privateMetadata?.role !== "premium") {
    return "only premium users can create groups, upgrade to premium";
  }

  return (
    <>
      <h1 className="text-3xl font-semibold">New album</h1>
      <Separator className="my-6" />
      <GroupForm onSubmit={createGroup} />
    </>
  );
}
