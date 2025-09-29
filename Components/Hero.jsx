"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Start Earning Through Smart Affiliate Marketing
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg md:mx-0 mx-auto">
            Discover top programs, promote trending products, and grow your income — all from one platform.
          </p>
          <a
            href="#offers"
            className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Explore Offers
          </a>
        </div>

        {/* Right: Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/TravelGoHero.jpeg" // replace with your actual image name in public/
            alt="Affiliate marketing illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
