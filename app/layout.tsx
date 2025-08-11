import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import {MobileSidebar, Sidebar} from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import {Toaster} from 'react-hot-toast';
import {Analytics} from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Jain | Developer",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={cn(inter.className)}>
        <Analytics/>
        <Toaster/>
        <div className="hidden lg:block">
          <Sidebar/>
        </div>
        <div className="block lg:hidden">
          <MobileSidebar/>
        </div>
        <main className="lg:pl-60 xl:pl-[24rem] rounded-lg  lg:pt-24">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
