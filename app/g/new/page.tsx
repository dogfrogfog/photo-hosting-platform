import { SubmitButton } from "@/components/button";
import { db, group } from "@/db";

export default function NewGroup() {
  async function createGroup(form: FormData) {
    "use server";
    try {
      await db.insert(group).values({
        name: (form.get("name") as string) || "Untitled",
      });
    } catch (e) {
      console.log("failed to create group");
      console.log(e);
    }
  }

  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">Groups of photos</h1>
      <div className="mb-12 rounded-xl bg-slate-600 p-6">
        <form action={createGroup as any}>
          <input
            type="text"
            name="name"
            placeholder="my-summer-trip-to-amsterdam"
            className="mb-2 w-96 rounded bg-white p-2"
          />
          <SubmitButton />
        </form>
      </div>
    </main>
  );
}
