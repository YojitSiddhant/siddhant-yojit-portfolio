import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const textFont = Inter({
  variable: "--font-text",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddhant Yojit | Frontend Developer",
  description:
    "Portfolio of Siddhant Yojit, a Bangalore-based frontend developer focused on UI engineering, responsive interfaces, and software testing.",
  openGraph: {
    title: "Siddhant Yojit | Frontend Developer",
    description:
      "Frontend developer building responsive websites, reusable UI systems, and polished product experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${textFont.variable} ${displayFont.variable} ${monoFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
