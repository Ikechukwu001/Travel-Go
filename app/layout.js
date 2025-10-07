import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "II Pay | Smart Finance & Payments UI",
  description:
    "A clean, mobile-first fintech dashboard inspired by Opay — designed for smooth transactions, service payments, and modern wallet management.",
  keywords: [
    "fintech",
    "mobile wallet",
    "payments",
    "digital banking",
    "Opay UI",
    "finance app",
    "nextjs fintech",
    "react wallet app",
  ],
  openGraph: {
    title: "II Pay | Smart Finance & Payments UI",
    description:
      "Experience a responsive fintech dashboard built with Next.js — featuring wallet balance, services, and transactions.",
    url: "https://ii-pay.vercel.app", // your project domain
    siteName: "II Pay UI",
    images: [
      {
        url: "/ii-pay.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "II Pay fintech dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "II Pay | Smart Finance & Payments UI",
    description:
      "A Next.js-based fintech UI demonstrating wallet balance, bill payments, and service features for learning and development.",
    images: ["/ii-pay.png"],
    creator: "@Ikechukwu",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
