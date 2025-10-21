import type { Metadata } from "next";
import "../globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Somnia – Sounds for Better Sleep",
  description:
    "Simple app with relaxing sounds and custom mixes saved locally on your device.",
  openGraph: {
    title: "Somnia – Sounds for Better Sleep",
    description:
      "Simple app with relaxing sounds and custom mixes saved locally on your device.",
    url: "/",
    images: [
      {
        url: "/somnia-logo.svg",
        width: 128,
        height: 34,
        alt: "Somnia logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="antialiased w-full h-full text-white">
        <MainLayout showHeader={false}>{children}</MainLayout>
      </body>
    </html>
  );
}
