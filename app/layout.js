import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Opay Inspired | Smart Finance UI",
  description:
    "Experience a sleek, mobile-first fintech interface inspired by modern wallet apps. Send money, pay bills, and explore smart financial tools.",
  keywords: [
    "fintech",
    "mobile wallet",
    "payments",
    "digital banking",
    "Opay UI clone",
    "react fintech",
    "nextjs finance app",
  ],
  openGraph: {
    title: "Opay Inspired | Smart Finance UI",
    description:
      "A modern, responsive finance dashboard inspired by Opay’s clean and intuitive wallet design.",
    url: "https://opay-inspired-demo.vercel.app", // replace with your actual domain
    siteName: "Opay Inspired UI",
    images: [
      {
        url: "/opay-preview.jpeg", // place this image in /public
        width: 1200,
        height: 630,
        alt: "Opay-inspired fintech dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opay Inspired | Smart Finance UI",
    description:
      "A Next.js fintech interface showcasing wallet balance, transactions, and services — built for study and innovation.",
    images: ["/opay-preview.jpeg"],
    creator: "@yourhandle", // optional
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
