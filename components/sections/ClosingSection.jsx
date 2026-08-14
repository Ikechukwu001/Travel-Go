"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#241b18] px-6 py-24 text-[#f7f2ea]">

      {/* Background glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#651f2b]/40 blur-3xl" />
      </div>

      {/* Decorative circles */}

      <div className="pointer-events-none absolute left-6 top-10 h-24 w-24 rounded-full border border-[#c8a96b]/20 sm:left-12" />

      <div className="pointer-events-none absolute bottom-10 right-6 h-32 w-32 rounded-full border border-[#c8a96b]/10 sm:right-12" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Small text */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-[#c8a96b]"
        >
          And The Story Continues...
        </motion.p>

        {/* Main heading */}

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.15,
          }}
          className="mt-8 font-serif text-6xl leading-none sm:text-8xl md:text-9xl"
        >
          Forever
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="mt-3 font-serif text-3xl italic text-[#e4d1a5] sm:text-5xl"
        >
          & Always
        </motion.p>

        {/* Divider */}

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 64, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="mx-auto mt-10 h-px bg-[#c8a96b]"
        />

        {/* Names */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.75,
          }}
          className="mt-10"
        >
          <p className="font-serif text-3xl sm:text-4xl">
            Samuel & Gift
          </p>

          <p className="mt-4 text-[9px] uppercase tracking-[0.45em] text-[#e4d1a5]/70">
            15 Years of Love
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#f7f2ea]/40">
            2001 — 2026
          </p>
        </motion.div>

        {/* Closing message */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mx-auto mt-16 max-w-lg text-sm leading-7 text-[#f7f2ea]/60"
        >
          Here's to the memories already made, the love that continues
          to grow, and all the beautiful chapters still waiting to be
          written.
        </motion.p>

        {/* Heart */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="mt-12 text-[#c8a96b]"
        >
          <span className="font-serif text-2xl">♥</span>
        </motion.div>

      </div>
    </section>
  );
}