import Sidebar from "@/components/Sidebar";
import { buttonVariants } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib";
import {
  ClerkProvider,
  SignInButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "online film albums",
  description:
    "save and share your film photos, vote for best photos and share your work and experience with the community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={courierPrime.className}>
          <Sidebar />
          <div className="sm:ml-48 lg:ml-64">
            <header className="m-3 flex h-20 items-center justify-end rounded-xl bg-gray-500 p-6 shadow-xl">
              <SignedOut>
                <SignInButton>
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "cursor-pointer",
                    )}
                  >
                    Sign In
                  </span>
                </SignInButton>
              </SignedOut>
              <UserButton afterSignOutUrl="/" />
            </header>
            <main className="p-12">{children}</main>
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
