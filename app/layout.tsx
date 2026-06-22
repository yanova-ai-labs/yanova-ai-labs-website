import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${COMPANY.name} - ${COMPANY.tagline}`,
  description: "Enterprise AI platform for infrastructure automation, operations, and analytics",
  metadataBase: new URL("https://yanovalabs.com"),
  alternates: {
    canonical: "/",
  },
  keywords: ["AI", "infrastructure", "automation", "kubernetes", "devops", "observability"],
  authors: [{ name: COMPANY.founder }],
  openGraph: {
    title: COMPANY.name,
    description: COMPANY.tagline,
    type: "website",
    url: "https://yanovalabs.com",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.tagline,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
