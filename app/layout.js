import "./globals.css";
import { Inter } from "next/font/google"

const inter = Inter({ 
  subsets: ["latin"] })

  export const metadata = {
  title: "TravelGo | Travel Essentials & Fashion Accessories",
  description:
    "Shop stylish fashion accessories and must-have travel essentials in one place. Get bags, outfits, and gear designed for comfort and adventure.",
  keywords: [
    "travel items",
    "travel fashion",
    "luggage bags",
    "travel essentials",
    "fashion accessories",
    "travel outfits",
    "backpacks",
    "holiday shopping",
  ],
  openGraph: {
    title: "TravelGo | Travel Essentials & Fashion Accessories",
    description:
      "Discover trendy fashion and travel gear for your next adventure. Shop bags, outfits, and essentials with TravelGo.",
    url: "https://travelgo.com", // replace with your domain
    siteName: "TravelGo",
    images: [
      {
        url: "/TravelGoHero.jpeg", // make sure this image is inside /public
        width: 1200,
        height: 630,
        alt: "Stylish travel essentials and fashion accessories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelGo | Travel Essentials & Fashion Accessories",
    description:
      "Shop stylish travel essentials and fashion accessories for your next journey.",
    images: ["/TravelGoHero.jpeg"],
    creator: "@yourhandle", // optional
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
