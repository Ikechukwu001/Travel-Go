"use client";

import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="relative overflow-hidden bg-[#241b18] px-6 py-28 text-[#f7f2ea] sm:py-36">
      
      {/* Decorative glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a96b]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#c8a96b]">
            The Couple
          </p>

          <h2 className="mt-5 font-serif text-5xl sm:text-7xl">
            Two Hearts.
          </h2>

          <p className="mt-2 font-serif text-3xl italic text-[#e4d1a5] sm:text-4xl">
            One Beautiful Journey.
          </p>
        </motion.div>

        {/* Couple images */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {/* Husband */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#651f2b]">

              {/* Husband Image */}

              <img
                src="/image/Husband.png"
                alt="Samuel Nero"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Decorative border */}

              <div className="pointer-events-none absolute inset-5 border border-[#e4d1a5]/30" />

            </div>

            <div className="mt-6">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#c8a96b]">
                The Husband
              </p>

              <h3 className="mt-2 font-serif text-3xl">
                Samuel Nero
              </h3>
            </div>
          </motion.div>

          {/* Wife */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#711f2e]">

              {/* Wife Image */}

              <img
                src="/image/Wife.jpeg"
                alt="Gift Nero"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Decorative border */}

              <div className="pointer-events-none absolute inset-5 border border-[#e4d1a5]/30" />

            </div>

            <div className="mt-6">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#c8a96b]">
                The Wife
              </p>

              <h3 className="mt-2 font-serif text-3xl">
                Gift Nero
              </h3>
            </div>
          </motion.div>

        </div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-24 max-w-2xl text-center"
        >
          <div className="mx-auto mb-8 h-px w-12 bg-[#c8a96b]" />

          <p className="font-serif text-2xl leading-relaxed text-[#eee4d4] sm:text-3xl">
            "The best thing about life is finding someone who knows
            all your imperfections and still chooses you every day."
          </p>

          <div className="mx-auto mt-8 h-px w-12 bg-[#c8a96b]" />
        </motion.div>

      </div>
    </section>
  );
}