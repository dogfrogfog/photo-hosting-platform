"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewGroup() {
  const router = useRouter();
  const [id, setId] = useState("unique-id");

  //   function submit(data) {
  //     console.log(data);
  //     // router.push(`/g/${data.groupId}`);
  //   }

  return (
    // html form with file input
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">Groups of photos</h1>
      <div className="mb-12 rounded-xl bg-slate-600 p-6">
        <form>
          <input
            onChange={(e) => setId(e.target.value)}
            type="text"
            name="groupId"
            placeholder="my-summer-trip-to-amsterdam"
            className="mb-2 w-96 rounded bg-white p-2"
          />
          <input type="file" name="photos" multiple />
          {/* <Link onClick={submit}>Upload</Link> */}
        </form>
        <Link
          href={`/g/${id}`}
          className="mt-6 inline-block rounded-xl bg-green-300 p-2"
        >
          Create new group
        </Link>
      </div>
    </main>
  );
}
