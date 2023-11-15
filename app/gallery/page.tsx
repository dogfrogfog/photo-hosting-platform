import Link from "next/link";
import { Suspense } from "react";

import { db, group } from "@/db";

export const revalidate = 30;
// export const dynamic = "force-dynamic";

export default function PersonalGallery() {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">Groups of photos</h1>
      <div className="mb-12 rounded-xl bg-slate-600 p-6">
        <Link href="/g/new" className="bg-white p-2">
          Add new group
        </Link>
      </div>
      <Suspense fallback={"loading..."}>
        {/* @ts-ignore */}
        <Groups />
      </Suspense>
    </main>
  );
}

async function Groups() {
  const data = await db.select().from(group);

  console.log("data");
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map(({ id, name, createdAt }) => (
        <Link href={`/g/${id}`} key={id}>
          <div className="col-span-1 h-[200px] rounded-xl bg-yellow-100 p-6 shadow">
            <span className="text-xl font-semibold text-gray-500">{name}</span>
            <span className="text-xl font-semibold text-gray-500">
              {createdAt?.toDateString()}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
