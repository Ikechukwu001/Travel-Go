"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all bg-white ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="inline-flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
            TG
          </div>
          <span className="text-xl font-semibold text-slate-900">TravelGo</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <li><a href="#offers" className="hover:text-blue-600">Offers</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="#offers"
          className="hidden md:inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>

        {/* Mobile button (hamburger or close depending on state) */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden z-[70] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close (X)
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6L18 18" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 18L18 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="6" width="18" height="2" rx="1" fill="#0f172a" />
              <rect x="3" y="11" width="18" height="2" rx="1" fill="#0f172a" />
              <rect x="3" y="16" width="18" height="2" rx="1" fill="#0f172a" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${isOpen ? "opacity-100 pointer-events-auto z-50" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden
      />

      {/* Right slide-in drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[78%] max-w-xs bg-white shadow-xl md:hidden z-[60] transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        <nav className="px-6 py-6">
          <ul className="flex flex-col gap-5 text-slate-700 font-medium">
            <li><a href="#offers" onClick={() => setIsOpen(false)} className="block">Offers</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block">About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block">Contact</a></li>
            <li className="mt-4">
              <a
                href="#offers"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </nav>
  )
}
