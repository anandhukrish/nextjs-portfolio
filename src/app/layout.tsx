import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ananthu Krishnan | Frontend Developer",
  description:
    "Ananthu Krishnan is a skilled Frontend Developer specializing in React, Next.js, TypeScript, and modern UI/UX development. Explore my portfolio and projects.",
  keywords: [
    "Ananthu Krishnan",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "JavaScript",
    "TypeScript",
    "web developer",
    "UI/UX",
    "Tailwind CSS",
    "modern web development",
    "software engineer",
    "frontend portfolio",
    "web performance",
    "responsive design",
    "CSS animations",
    "React.js expert",
    "single-page applications",
    "progressive web apps",
    "developer portfolio",
    "frontend coding",
    "web design",
  ],
  openGraph: {
    title: "Ananthu Krishnan | Frontend Developer",
    description:
      "Explore the portfolio of Ananthu Krishnan, a Frontend Developer specializing in React, Next.js, and UI/UX development.",
    url: "https://your-portfolio.com",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ananthu Krishnan Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <Header />
          <main className="lg:pt-16"> {children}</main>
        </div>
      </body>
    </html>
  );
}
