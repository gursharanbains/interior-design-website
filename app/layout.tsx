import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Jost } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DmSerifDisplayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
});
const JostFont = Jost({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "OceanInt",
  description: "The best interior design agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DmSerifDisplayFont.variable} ${JostFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
