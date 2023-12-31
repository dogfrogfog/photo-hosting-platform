import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  currentUser,
} from "@clerk/nextjs";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib";
import { LinksList } from "./LinksList";

export default async function Sidebar() {
  const user = await currentUser();

  const isPremiumUser = !!user?.privateMetadata?.role;

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-48 bg-black lg:w-64">
        <div className="flex h-[calc(100vh-28px)] flex-col justify-between">
          <div>
            <div className="mb-16 p-6 text-3xl font-bold text-yellow-500">
              logo
            </div>
            <LinksList withUser={!!user} withPremiumUser={isPremiumUser} />
          </div>
          {isPremiumUser && (
            <Button className="mx-6" asChild variant="outline">
              <Link href="/g/new" className="!justify-start">
                New Album
              </Link>
            </Button>
          )}
          <div>
            <div className="p-6">
              <SignedOut>
                <SignInButton>
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "block w-full cursor-pointer",
                    )}
                  >
                    Sign In
                  </span>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                  <span className="text-white">My account</span>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
        <div className="flex h-8 items-center justify-center space-x-2 bg-zinc-800 text-sm text-zinc-400">
          <a
            className="hover:underline"
            href="mailto:maksim.hodasevich@gmail.com"
          >
            Mail us
          </a>
          <span>|</span>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/dogfrogfog"
            target="_blank"
          >
            Social
          </a>
        </div>
      </aside>
    </>
  );
}
