import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className + " flex"}>
          <div className="flex h-screen w-64 flex-col justify-between bg-pink-500 px-6 pb-6 pt-12">
            <div>
              <h1 className="mb-12 text-3xl font-semibold">logo</h1>
              <Link
                href="/"
                className="text-md mb-4 block w-full rounded bg-white bg-opacity-50 p-2 transition-all hover:opacity-80"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-md block w-full rounded bg-white bg-opacity-50 p-2 transition-all hover:opacity-80"
              >
                Personal Gallery
              </Link>
            </div>
            <span className="text-center text-sm">copyright @ 2023</span>
          </div>
          <div className="max-h-screen flex-grow overflow-y-auto">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
