"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AnniversaryEnvelope from "@/components/envelope/AnniversaryEnvelope";

import FamilyHero from "@/components/sections/FamilyHero";
import CoupleSection from "@/components/sections/CoupleSection";
import LoveStory from "@/components/sections/LoveStory";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import FamilySection from "@/components/sections/FamilySection";
import CelebrationDetails from "@/components/sections/CelebrationDetails";
import ClosingSection from "@/components/sections/ClosingSection";

export default function AnniversaryExperience() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  const handleEnvelopeOpen = async () => {
    /*
     * Start music immediately from the user's click.
     */

    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;

        await audioRef.current.play();

        setMusicPlaying(true);
      } catch (error) {
        console.error(
          "Unable to play anniversary music:",
          error
        );
      }
    }

    /*
     * Wait for the envelope/card animation before
     * revealing the main website.
     *
     * The card needs time to come out of the envelope.
     */
    setTimeout(() => {
      setOpened(true);
    }, 2300);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();

        setMusicPlaying(true);
      } catch (error) {
        console.error(
          "Unable to play music:",
          error
        );
      }
    } else {
      audioRef.current.pause();

      setMusicPlaying(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f2ea]">

      {/* =========================================
          ANNIVERSARY MUSIC
      ========================================= */}

      <audio
        ref={audioRef}
        src="/audio/anniversary-song.mp3"
        loop
        preload="auto"
      />

      {/* =========================================
          MUSIC CONTROL
      ========================================= */}

      {opened && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={
            musicPlaying
              ? "Pause music"
              : "Play music"
          }
          className="fixed bottom-6 right-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a96b]/50 bg-[#241b18]/90 text-[#e4d1a5] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#c8a96b]"
        >
          {musicPlaying ? (
            <span className="text-lg">
              ♫
            </span>
          ) : (
            <span className="text-sm">
              ▶
            </span>
          )}
        </button>
      )}

      {/* =========================================
          ENVELOPE → WEBSITE TRANSITION
      ========================================= */}

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            key="envelope"
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(4px)",
              transition: {
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <AnniversaryEnvelope
              onOpen={handleEnvelopeOpen}
            />
          </motion.div>

        ) : (

          <motion.div
            key="experience"
            initial={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <FamilyHero />

            <CoupleSection />

            <LoveStory />

            <Timeline />

            <Gallery />

            <FamilySection />

            <CelebrationDetails />


            <ClosingSection />

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}