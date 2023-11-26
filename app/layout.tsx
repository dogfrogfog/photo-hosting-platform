import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <body className={inter.className}>
          <Sidebar />
          <main className="p-12 sm:ml-48 lg:ml-64">{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
