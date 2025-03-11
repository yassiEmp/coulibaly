import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coulibaly",
  description: "a landing page for coulibaly a school in benin ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full flex bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full flex flex-col bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
