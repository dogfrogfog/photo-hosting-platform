import { GroupForm } from "./GroupForm";

import { db, group } from "@/db";

async function createGroup(form: any) {
  "use server";
  await db.insert(group).values({
    ...form,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export default function NewGroup() {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">Create new group</h1>
      <GroupForm onSubmit={createGroup} />
    </main>
  );
}
