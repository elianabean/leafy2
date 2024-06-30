import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  title: "Leafy",
  description:
    "Leafy is a business centered around house plant development and maintenance.",
  robots: "all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} overflow-x-hidden bg-white`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
