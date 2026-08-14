"use client";

import { motion } from "framer-motion";

const familyMembers = [
  {
    name: "Family Member One",
    role: "Daughter",
  },
  {
    name: "Family Member Two",
    role: "Son",
  },
  {
    name: "Family Member Three",
    role: "Daughter",
  },
  {
    name: "Family Member Four",
    role: "Son",
  },
];

export default function FamilySection() {
  return (
    <section className="bg-[#f7f2ea] px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8b7770]">
            Their Greatest Gift
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#651f2b] sm:text-7xl">
            Family
          </h2>

          <div className="mx-auto mt-7 h-px w-16 bg-[#c8a96b]" />

          <p className="mt-7 text-sm leading-7 text-[#8b7770]">
            What began with two people grew into a family filled with
            love, laughter, memories and countless beautiful moments.
          </p>
        </motion.div>

        {/* Family photo */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative mx-auto mt-16 aspect-[16/9] max-w-5xl overflow-hidden bg-[#651f2b]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#e4d1a5]">
              <p className="font-serif text-4xl italic sm:text-5xl">
                The Nero's Family
              </p>

              <p className="mt-4 text-[9px] uppercase tracking-[0.4em] opacity-70">
                Family Photograph Placeholder
              </p>
            </div>
          </div>

          <div className="absolute inset-5 border border-[#e4d1a5]/30" />
        </motion.div>

        {/* Family quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="font-serif text-2xl italic leading-relaxed text-[#5b4035] sm:text-3xl">
            "A family is where life begins, love never ends,
            and every memory has a place to call home."
          </p>
        </motion.div>

        {/* Family members */}

        <div className="mt-20 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-8">

          {familyMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="text-center"
            >
              {/* Placeholder portrait */}

              <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden bg-[#eee4d4]">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p className="font-serif text-lg text-[#651f2b]">
                    Photo
                  </p>
                </div>

                <div className="absolute inset-3 border border-[#c8a96b]/40" />
              </div>

              <h3 className="mt-5 font-serif text-xl text-[#651f2b]">
                {member.name}
              </h3>

              <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#8b7770]">
                {member.role}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}