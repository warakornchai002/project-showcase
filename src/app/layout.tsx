/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://project-showcase-blond.vercel.app";
const siteTitle = "Project Showcase | รวมผลงานเว็บโปรเจกต์";
const siteDescription =
  "หน้าโชว์เคสภาษาไทยสำหรับรวมโปรเจกต์ที่เสร็จสมบูรณ์ พร้อมสรุปงาน เทคโนโลยีที่ใช้ และลิงก์เปิดชมผลงานจริงบน Vercel";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Project Showcase",
  },
  description: siteDescription,
  applicationName: "Project Showcase",
  keywords: [
    "Project Showcase",
    "ผลงานเว็บ",
    "เว็บโปรเจกต์",
    "Next.js",
    "Vercel",
    "Frontend",
    "UX UI",
  ],
  authors: [{ name: "Project Showcase" }],
  creator: "Project Showcase",
  publisher: "Project Showcase",
  alternates: {
    canonical: siteUrl,
    languages: {
      th: siteUrl,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Project Showcase",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07111f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-slate-950 font-sans text-white">
        {children}
      </body>
    </html>
  );
}
