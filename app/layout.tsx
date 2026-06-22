import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yanovalabs.com"),
  title: "Yanova AI Labs — Intelligence for Every Business",
  description: "Enterprise AI platform: one-click infrastructure automation, AI Ops, real-time observability, compliance & market intelligence.",
  keywords: ["AI", "infrastructure automation", "Kubernetes", "DevOps", "AIOps", "observability", "cloud platform"],
  authors: [{ name: "Venkat Yanapothula" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Yanova AI Labs",
    description: "Intelligence for Every Business",
    type: "website",
    url: "https://yanovalabs.com",
    siteName: "Yanova AI Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanova AI Labs",
    description: "Intelligence for Every Business",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-100 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
