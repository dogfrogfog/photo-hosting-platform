import Link from "next/link";

export default function PersonalGallery() {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">Groups of photos</h1>
      <div className="mb-12 rounded-xl bg-slate-600 p-6">
        <Link href="/g/new" className="bg-white p-2">
          Add new group
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {[
          "summer",
          "winter",
          "georgia-2021",
          "italy-2022",
          "germany-hamburg",
        ].map((g) => (
          <Link href={`/g/${g}`} key={g}>
            <div className="col-span-1 h-[200px] rounded-xl bg-yellow-100 p-6 shadow">
              <span className="text-xl font-semibold text-gray-500">{g}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
