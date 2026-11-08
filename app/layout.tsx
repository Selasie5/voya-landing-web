import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Head from "next/head";

const tomatoGrotesk = localFont({
  src: [
    { path: "../public/TomatoGrotesk-Regular.63ff49eb.otf", weight: "400", style: "normal" },
    { path: "../public/TomatoGrotesk-Medium.8b894f94.otf", weight: "500", style: "normal" },
    { path: "../public/TomatoGrotesk-SemiBold.1183d758.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-tomato-grotesk",
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
    <html lang="en" className={`${tomatoGrotesk.variable} h-full antialiased`}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-2.png" sizes="any" />
      </Head>
      <body className="min-h-full flex flex-col font-sans">
        <Analytics />
        <ClerkProvider waitlistUrl="/">{children}</ClerkProvider>
      </body>
    </html>
  );
}
