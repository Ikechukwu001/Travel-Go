"use client";

import { motion } from "framer-motion";

export default function LoveStory() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2ea] px-6 py-28 sm:py-40">

      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8b7770]">
            Their Story
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#651f2b] sm:text-7xl">
            A Love Worth
          </h2>

          <h3 className="font-serif text-4xl italic text-[#5b4035] sm:text-5xl">
            Remembering
          </h3>

          <div className="mx-auto mt-8 h-px w-16 bg-[#c8a96b]" />
        </motion.div>

        {/* Story image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
          className="relative mt-16 aspect-[16/9] overflow-hidden bg-[#651f2b]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#e4d1a5]">
              <p className="font-serif text-4xl italic">
                Their Beginning
              </p>
            </div>
          </div>

          <div className="absolute inset-5 border border-[#e4d1a5]/30" />
        </motion.div>

        {/* Story text */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="font-serif text-2xl leading-relaxed text-[#5b4035] sm:text-3xl">
            It began with two people, one beautiful decision, and a
            promise to walk through life together.
          </p>

          <p className="mt-8 text-sm leading-8 text-[#8b7770]">
            Fifteen years later, that promise has grown into
            something even more beautiful — a family, countless
            memories, moments of laughter, challenges overcome,
            celebrations shared, and a love that continues to grow.
          </p>

          <p className="mt-6 text-sm leading-8 text-[#8b7770]">
            This is more than an anniversary. It is a celebration of
            everything they have built together and every chapter
            still waiting to be written.
          </p>
        </motion.div>

      </div>
    </section>
  );
}