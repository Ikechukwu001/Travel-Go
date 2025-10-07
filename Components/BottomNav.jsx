"use client";
import Link from "next/link";
import { Home, Gift, CreditCard, User } from "lucide-react";

export default function BottomNav() {
  const navItems = [
    { label: "Home", icon: <Home className="w-5 h-5" />, href: "/" },
    { label: "Rewards", icon: <Gift className="w-5 h-5" />, href: "/rewards" },
    { label: "Cards", icon: <CreditCard className="w-5 h-5" />, href: "/cards" },
    { label: "Profile", icon: <User className="w-5 h-5" />, href: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t flex justify-around py-2">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center text-xs text-gray-600 hover:text-green-600 transition"
        >
          <span className="mb-1">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}