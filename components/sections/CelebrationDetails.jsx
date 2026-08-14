"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

export default function CelebrationDetails() {
  return (
    <section className="relative overflow-hidden bg-[#651f2b] px-6 py-28 text-[#f7f2ea] sm:py-36">

      {/* Subtle background detail */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a96b]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#e4d1a5]">
            Join Us
          </p>

          <h2 className="mt-5 font-serif text-5xl sm:text-7xl">
            Come Celebrate
          </h2>

          <p className="mt-5 font-serif text-2xl italic text-[#e4d1a5] sm:text-3xl">
            15 Years of Love
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#c8a96b]" />
        </motion.div>

        {/* Details */}

        <div className="mx-auto mt-16 grid max-w-3xl gap-5 sm:grid-cols-3">

          {/* Date */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-[#e4d1a5]/20 px-6 py-8"
          >
            <CalendarDays
              size={25}
              strokeWidth={1}
              className="mx-auto text-[#c8a96b]"
            />

            <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#e4d1a5]/70">
              Date
            </p>

            <p className="mt-3 font-serif text-xl">
              November 28th, 2026
            </p>

            <p className="mt-1 text-xs text-[#f7f2ea]/60">
                Saturday, 2026
            </p>
          </motion.div>

          {/* Time */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="border border-[#e4d1a5]/20 px-6 py-8"
          >
            <Clock3
              size={25}
              strokeWidth={1}
              className="mx-auto text-[#c8a96b]"
            />

            <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#e4d1a5]/70">
              Time
            </p>

            <p className="mt-3 font-serif text-xl">
              5:00 PM
            </p>

            <p className="mt-1 text-xs text-[#f7f2ea]/60">
              Guests arrive Before the Time
            </p>
          </motion.div>

          {/* Venue */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="border border-[#e4d1a5]/20 px-6 py-8"
          >
            <MapPin
              size={25}
              strokeWidth={1}
              className="mx-auto text-[#c8a96b]"
            />

            <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#e4d1a5]/70">
              Venue
            </p>

            <p className="mt-3 font-serif text-xl">
              Core Ritchie Neighborhood Center
            </p>

            <p className="mt-1 text-xs text-[#f7f2ea]/60">
              445 14th Ave, Regina, SK S4N 6T5
            </p>
          </motion.div>

        </div>

        {/* Message */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="mx-auto mt-14 max-w-xl text-sm leading-7 text-[#f7f2ea]/70"
        >
          We would be honored to have you join us as we celebrate
          Fifteen beautiful years of love, family and memories.
        </motion.p>

        {/* Location button */}

        <motion.a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-3 border border-[#c8a96b] px-7 py-3 text-[10px] uppercase tracking-[0.3em] text-[#e4d1a5] transition-colors duration-300 hover:bg-[#c8a96b] hover:text-[#42131c]"
        >
          <MapPin size={15} strokeWidth={1.5} />

          View Location
        </motion.a>

      </div>
    </section>
  );
}