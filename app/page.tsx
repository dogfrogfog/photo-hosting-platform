import { db } from "@/db";
import { group } from "@/db/schema";

export default async function Home() {
  const data = await db.select().from(group).limit(3);

  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">home page</h1>
      <span>{JSON.stringify(data)}</span>
    </main>
  );
}
