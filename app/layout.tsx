import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Head from "next/head";

const season = localFont({
  src: "../public/SeasonCollectionVF-TRIAL.ttf",
  variable: "--font-season",
  weight: "300 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voya",
  description: "The best way to travel the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${season.variable} h-full antialiased`}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-2.png" sizes="any" />
      </Head>
      <body className="min-h-full flex flex-col font-season-sans">
        <Analytics />
        <ClerkProvider waitlistUrl="/">{children}</ClerkProvider>
      </body>
    </html>
  );
}
