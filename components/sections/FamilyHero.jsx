"use client";

import { motion } from "framer-motion";

export default function FamilyHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f2ea] px-6 py-20">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.12),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#8b7770]">
            The
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium tracking-tight text-[#651f2b] sm:text-7xl md:text-8xl">
            Nero's
          </h1>

          <div className="mx-auto my-7 h-px w-16 bg-[#c8a96b]" />

          <p className="font-serif text-2xl italic text-[#5b4035] sm:text-3xl">
            Celebrating 15 Years of Love
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#8b7770]">
            A beautiful journey of love, friendship, family, laughter,
            memories, and a lifetime shared together.
          </p>
        </motion.div>

        {/* Hero image placeholder */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-14 aspect-[16/8] w-full max-w-5xl overflow-hidden rounded-sm bg-[#651f2b]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#e4d1a5]">
              <p className="font-serif text-3xl italic">
                Their Story
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.4em] opacity-70">
                Photo Placeholder
              </p>
            </div>
          </div>

          <div className="absolute inset-5 border border-[#e4d1a5]/30" />
        </motion.div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-12 flex flex-col items-center"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#8b7770]">
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 h-8 w-px bg-[#c8a96b]"
          />
        </motion.div>

      </div>
    </section>
  );
}