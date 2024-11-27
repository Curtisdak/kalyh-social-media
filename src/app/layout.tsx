import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import  Head  from "next/head";


const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kalyh",
  description:
    "Kalyh is a modern social media platform created by Curtis Dakouri Serikpa, designed to foster meaningful connections and empower users to share, explore, and engage seamlessly in a vibrant digital community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> 
    <html lang="en">
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={poppins.className}> 
        
        <div className={`w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 fixed z-40`}><Navbar/></div>
        <div className={`w-full bg-slate-200 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64`}>{children}</div>
        </body>
    </html>
    </ClerkProvider>
  );
}
