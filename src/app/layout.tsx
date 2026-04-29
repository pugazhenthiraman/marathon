import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://logesh-waran2003.github.io"),
  title: {
    default: "Hosur Midnight Marathon 2026 | Run the Night, Light the Future",
    template: "%s | Hosur Midnight Marathon",
  },
  description: "Join the inaugural Hosur Midnight Marathon on June 16, 2026. Half Marathon, 10K & 5K categories — all at ₹500. Organised by Elitzur Academy of Sports.",
  openGraph: {
    title: "Hosur Midnight Marathon 2026",
    description: "Run the Night, Light the Future. June 16, 2026 — Half Marathon, 10K & 5K. Register now for ₹500.",
    url: "https://logesh-waran2003.github.io/marathon/",
    siteName: "Hosur Midnight Marathon",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hosur Midnight Marathon 2026",
    description: "Run the Night, Light the Future. June 16, 2026 — Register now for ₹500.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
