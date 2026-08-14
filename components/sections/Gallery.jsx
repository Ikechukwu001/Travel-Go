"use client";

import { motion } from "framer-motion";

const memories = [
  {
    id: 1,
    title: "The Nero",
    caption: "The Beautiful Story of Love.",
    year: "",
    image: "/image/Husbandandwife.png",
  },
  {
    id: 2,
    title: "Together",
    caption: "Two hearts, one journey.",
    year: "",
    image: "/image/Couple.jpeg",
  },
  {
    id: 3,
    title: "15 Years",
    caption: "A lifetime of memories and many more to come.",
    year: "",
    image: "/image/family-hero.jpeg",
  },
];

export default function Gallery() {
  return (
    <section className="relative bg-[#f7f2ea] px-5 pb-10 pt-28 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8b7770]">
            Memories
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#651f2b] sm:text-7xl">
            Moments We Treasure
          </h2>

          <div className="mx-auto mt-7 h-px w-16 bg-[#c8a96b]" />
        </motion.div>
      </div>

      {/* Sticky stacking cards */}
      <div className="relative mx-auto mt-20 max-w-4xl">
        {memories.map((memory, index) => (
          <StackCard key={memory.id} memory={memory} index={index} />
        ))}

        {/* spacer so the last card can fully settle before the section ends */}
        <div className="h-[10vh]" />
      </div>
    </section>
  );
}

/* ==================================================
   Stack Card
   Each card sticks near the top of the viewport at an
   increasing offset, so later cards slide up and cover
   earlier ones, leaving a sliver of the previous card
   peeking out above.
================================================== */

function StackCard({ memory, index }) {
  const topOffset = 96 + index * 28; // px — increasing sticky offset per card

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
      className="sticky mb-8 overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(36,27,24,0.35)]"
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
        <img
          src={memory.image}
          alt={memory.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* muted gradient so text stays quiet, not loud */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241b18]/70 via-[#241b18]/10 to-transparent" />

        {/* muted text */}
        <div className="absolute bottom-0 left-0 w-full p-7 sm:p-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#e4d1a5]/70">
            {memory.year}
          </p>

          <h3 className="mt-2 font-serif text-2xl text-white/85 sm:text-3xl">
            {memory.title}
          </h3>

          <p className="mt-2 max-w-md text-xs leading-6 text-white/50">
            {memory.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}