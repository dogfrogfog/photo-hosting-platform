import { SignIn, UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="p-12">
      <h1 className="mb-12 text-3xl font-semibold">home page</h1>
      <span>HOME</span>
      <SignIn />
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
