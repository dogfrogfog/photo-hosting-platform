export default function GroupPage({ params: { groupId } }: any) {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-bold">groupId: {groupId}</h1>
      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3, 4].map((image) => (
          <div
            key={image}
            className="col-span-1 h-[200px] rounded-xl bg-red-100 p-6 shadow"
          >
            <img src={`https://picsum.photos/seed/${groupId}-${image}/200`} />
          </div>
        ))}
      </div>
    </main>
  );
}
