import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Muhammad Aliyu Tukur (Manex) — Founder & Technologist", template: "%s — Manex" },
  description: "The official portfolio and autobiography of Muhammad Aliyu Tukur, known as Manex — FUTB cybersecurity student, founder of Manex Technologies, DICON IT intern, technology builder and creator from Kaduna, Nigeria.",
  keywords: ["Muhammad Aliyu Tukur", "Manex", "Manex Technologies", "Nigerian technologist", "cybersecurity student", "IoT Nigeria", "Nexmesh"], authors: [{ name: "Muhammad Aliyu Tukur" }], creator: "Muhammad Aliyu Tukur",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "/" },
  openGraph: { type: "profile", title: "Muhammad Aliyu Tukur — Manex", description: "Cybersecurity student, founder, DICON IT intern and multidisciplinary technology builder from Kaduna, Nigeria.", siteName: "Manex", images: [{ url: "/images/manex-main.webp", width: 1024, height: 1536, alt: "Muhammad Aliyu Tukur, known as Manex" }] },
  twitter: { card: "summary_large_image", title: "Muhammad Aliyu Tukur — Manex", description: "Founder, cybersecurity student and multidisciplinary technology builder from Nigeria." }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  verification: googleVerification ? { google: googleVerification } : undefined,
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
