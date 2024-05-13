import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vaibhav P Ghugretkar -  Web Developer",
  icons:{
    icon:["/favicon.ico"],
    apple:["/favicon.ico"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/favicon.ico" />

      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
        <Navbar/>
        </div>
       
        {children}
        </body>
    </html>
  );
}
