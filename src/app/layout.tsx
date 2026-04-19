import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader, SiteFooter } from "@skeptik/ui";
import { Monogram } from "@/components/monogram";
import { Wordmark } from "@/components/wordmark";
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

const logo = (
  <>
    <Monogram size={26} />
    <Wordmark className="text-base" />
  </>
);

const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

const footerLinkGroups = [
  {
    title: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/resume", label: "Resume" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { href: "mailto:nathan@bnlucas.com", label: "nathan@bnlucas.com" },
      { href: "https://github.com/bnlucas", label: "GitHub", external: true },
      { href: "https://linkedin.com/in/bnlucas88", label: "LinkedIn", external: true },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader
          logo={logo}
          nav={nav}
          actions={[
            { href: "https://github.com/bnlucas", label: "GitHub", variant: "outline", external: true },
          ]}
          maxWidth="max-w-5xl"
        />
        <main className="flex-1">{children}</main>
        <SiteFooter
          logo={logo}
          description="Staff engineer building back-end platforms from scratch."
          linkGroups={footerLinkGroups}
          legal={{ holder: "Nathan Lucas" }}
          trailingText="bnlucas.com"
          maxWidth="max-w-5xl"
        />
        <Analytics />
      </body>
    </html>
  );
}
