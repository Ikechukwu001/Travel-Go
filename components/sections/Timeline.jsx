"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2001",
    title: "The Beginning",
    description:
      "Two hearts became one and a beautiful journey began.",
  },
  {
    year: "2005",
    title: "Growing Together",
    description:
      "New dreams, new memories, and new chapters began to unfold.",
  },
  {
    year: "2010",
    title: "A Growing Family",
    description:
      "Their love continued to create a home filled with warmth and laughter.",
  },
  {
    year: "2018",
    title: "Beautiful Memories",
    description:
      "Years of adventures, celebrations, challenges and unforgettable moments.",
  },
  {
    year: "2026",
    title: "15 Years",
    description:
      "A quarter of a century of love, friendship, family and togetherness.",
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-[#eee4d4] px-6 py-28 sm:py-40">

      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8b7770]">
            The Journey
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#651f2b] sm:text-7xl">
            Through The Years
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#8b7770]">
            Every year brought a new chapter. Every chapter became
            another beautiful part of their story.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Center line */}

          <div className="absolute left-4 top-0 h-full w-px bg-[#c8a96b]/50 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20 md:space-y-28">

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.05,
                }}
                className={`relative flex md:items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* Dot */}

                <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#eee4d4] bg-[#651f2b] md:left-1/2" />

                {/* Content */}

                <div
                  className={`ml-10 w-full md:ml-0 md:w-[42%] ${
                    index % 2 === 0
                      ? "md:text-right"
                      : "md:text-left"
                  }`}
                >
                  <p className="font-serif text-4xl text-[#c8a96b] sm:text-5xl">
                    {milestone.year}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#651f2b] sm:text-3xl">
                    {milestone.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#8b7770]">
                    {milestone.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}