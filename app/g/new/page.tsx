import { createGroup } from "@/actions/createGroup";
import { GroupForm } from "@/components/GroupForm";

export default function NewGroup() {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">New group</h1>
      <GroupForm onSubmit={createGroup} />
    </main>
  );
}
