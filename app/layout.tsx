import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
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
          {/* @ts-ignore */}
          <Sidebar />
          <div className="ml-48 scroll-smooth lg:ml-64">
            <main className="p-12">{children}</main>
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
