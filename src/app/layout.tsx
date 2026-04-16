import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nathan Lucas — Staff Software Engineer",
    template: "%s · Nathan Lucas",
  },
  description:
    "Staff Software Engineer building production-grade back-end platforms. Founder of Skeptik. Rust, Ruby, TypeScript, Python, Java.",
  metadataBase: new URL("https://bnlucas.com"),
  authors: [{ name: "Nathan Lucas" }],
  openGraph: {
    type: "website",
    url: "https://bnlucas.com",
    title: "Nathan Lucas — Staff Software Engineer",
    description:
      "Staff Software Engineer building production-grade back-end platforms. Founder of Skeptik.",
    siteName: "Nathan Lucas",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Lucas — Staff Software Engineer",
    description:
      "Staff Software Engineer building production-grade back-end platforms. Founder of Skeptik.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
