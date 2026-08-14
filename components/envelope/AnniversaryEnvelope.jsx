"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AnniversaryEnvelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    /*
     * Start the music immediately from the user's click.
     */
    onOpen?.();
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f2ea] px-6">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a96b]/10 blur-3xl" />
      </div>

      {/* =========================================
          MAIN ENVELOPE AREA
      ========================================= */}

      <div className="relative flex w-full max-w-[560px] items-center justify-center">

        {/* =========================================
            ENVELOPE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full"
        >

          {/* =========================================
              INVITATION CARD
              Hidden behind envelope initially
          ========================================= */}

          <motion.div
            initial={{
              y: 25,
              scale: 0.92,
              opacity: 0,
            }}
            animate={
              isOpening
                ? {
                    y: -150,
                    scale: 1,
                    opacity: 1,
                  }
                : {
                    y: 25,
                    scale: 0.92,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[8%] right-[8%] top-[-15%] z-10"
          >
            <div className="relative aspect-[3/4] bg-[#f7f2ea] p-6 shadow-2xl sm:p-8">

              {/* Card border */}

              <div className="absolute inset-4 border border-[#c8a96b]/50 sm:inset-5" />

              {/* Card content */}

              <div className="relative flex h-full flex-col items-center justify-center text-center">

                <p className="text-[8px] uppercase tracking-[0.5em] text-[#8b7770] sm:text-[9px]">
                  You Are Invited
                </p>

                <div className="mx-auto mt-5 h-px w-10 bg-[#c8a96b]" />

                <h1 className="mt-7 font-serif text-4xl leading-tight text-[#651f2b] sm:text-5xl">
                  The Nero's
                  <br />
                  Family
                </h1>

                <p className="mt-6 font-serif text-xl italic text-[#5b4035] sm:text-2xl">
                  Celebrating
                </p>

                <p className="mt-2 font-serif text-5xl text-[#651f2b] sm:text-6xl">
                  25
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.45em] text-[#8b7770]">
                  Years of Love
                </p>

                <div className="mx-auto mt-7 h-px w-10 bg-[#c8a96b]" />

                <p className="mt-6 text-[8px] uppercase tracking-[0.35em] text-[#8b7770]">
                  2001 — 2026
                </p>

              </div>
            </div>
          </motion.div>

          {/* =========================================
              ENVELOPE
          ========================================= */}

          <motion.div
            animate={
              isOpening
                ? {
                    opacity: 0,
                    scale: 0.96,
                  }
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={{
              duration: 1,
              delay: isOpening ? 1.2 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20"
          >

            {/* Envelope body */}

            <div className="relative aspect-[1.5/1] overflow-hidden bg-[#651f2b] shadow-2xl">

              {/* Inner paper */}

              <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[8%] bg-[#f7f2ea]">

                <div className="flex h-full flex-col items-center justify-center text-center">

                  <p className="text-[8px] uppercase tracking-[0.5em] text-[#8b7770] sm:text-[9px]">
                    A Special Invitation
                  </p>

                  <h2 className="mt-5 font-serif text-3xl text-[#651f2b] sm:text-4xl">
                    Samuel & Gift
                  </h2>

                  <div className="mx-auto mt-5 h-px w-10 bg-[#c8a96b]" />

                  <p className="mt-5 font-serif text-lg italic text-[#5b4035] sm:text-xl">
                    15 Years Together
                  </p>

                </div>

              </div>

              {/* =========================================
                  ENVELOPE FLAP
              ========================================= */}

              <motion.div
                animate={
                  isOpening
                    ? {
                        rotateX: -180,
                      }
                    : {
                        rotateX: 0,
                      }
                }
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                }}
                className="absolute left-0 right-0 top-0 z-30"
              >

                <div
                  className="
                    h-0
                    w-0
                    border-l-[280px]
                    border-r-[280px]
                    border-t-[200px]
                    border-l-transparent
                    border-r-transparent
                    border-t-[#711f2e]
                  "
                />

              </motion.div>

              {/* Envelope side folds */}

              <div className="absolute bottom-0 left-0 z-20 h-0 w-0 border-b-[190px] border-r-[280px] border-b-[#5b1925] border-r-transparent sm:border-b-[200px] sm:border-r-[280px]" />

              <div className="absolute bottom-0 right-0 z-20 h-0 w-0 border-b-[190px] border-l-[280px] border-b-[#5b1925] border-l-transparent sm:border-b-[200px] sm:border-l-[280px]" />

              {/* Bottom flap */}

              <div className="absolute bottom-0 left-0 right-0 z-30 h-0 w-0 border-b-[200px] border-l-[280px] border-r-[280px] border-b-[#651f2b] border-l-transparent border-r-transparent" />

              {/* Envelope border */}

              <div className="pointer-events-none absolute inset-5 z-40 border border-[#e4d1a5]/30" />

              {/* =========================================
                  SEAL
              ========================================= */}

              <motion.div
                animate={
                  isOpening
                    ? {
                        opacity: 0,
                        scale: 0.7,
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                      }
                }
                transition={{
                  duration: 0.4,
                  delay: isOpening ? 0.4 : 0,
                }}
                className="absolute left-1/2 top-1/2 z-50 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e4d1a5]/70 bg-[#651f2b] text-[#e4d1a5] shadow-xl"
              >
                <span className="font-serif text-xl">
                  A
                </span>
              </motion.div>

            </div>

            {/* =========================================
                CLICK AREA
            ========================================= */}

            {!isOpening && (
              <button
                type="button"
                onClick={handleOpen}
                className="absolute inset-0 z-[60] cursor-pointer"
                aria-label="Open anniversary invitation"
              />
            )}

          </motion.div>

          {/* =========================================
              TEXT BELOW ENVELOPE
          ========================================= */}

          <motion.div
            animate={
              isOpening
                ? {
                    opacity: 0,
                    y: 10,
                  }
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.5,
            }}
            className="mt-8 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#8b7770]">
              Tap to open
            </p>

            <p className="mt-3 font-serif text-lg italic text-[#651f2b]">
              A special celebration awaits
            </p>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}