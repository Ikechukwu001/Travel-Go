"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const memories = [
  {
    id: 1,
    title: "The Beginning",
    caption: "Where their beautiful journey began.",
    year: "2001",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 2,
    title: "Together",
    caption: "Two hearts, one journey.",
    year: "2005",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Beautiful Moments",
    caption: "The little moments that became unforgettable memories.",
    year: "2010",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "A Growing Family",
    caption: "Love multiplied and The grew.",
    year: "2014",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 5,
    title: "Still Choosing You",
    caption: "After all these years, still together.",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "15 Years",
    caption: "A lifetime of memories and many more to come.",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentIndex = selectedImage
    ? memories.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? memories.length - 1
        : currentIndex - 1;

    setSelectedImage(memories[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === memories.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(memories[nextIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, currentIndex]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f2ea] px-5 py-28 sm:px-8 sm:py-40">

        <div className="mx-auto max-w-7xl">

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

            <p className="mt-7 text-sm leading-7 text-[#8b7770]">
              A collection of moments, places, people and memories
              that have made their journey so beautiful.
            </p>
          </motion.div>

          {/* Editorial gallery */}

          <div className="mt-20 grid gap-5 md:grid-cols-12 md:gap-7">

            {/* Large image */}

            <GalleryCard
              memory={memories[0]}
              className="md:col-span-7 md:row-span-2"
              aspect="aspect-[4/5] md:aspect-auto md:min-h-[760px]"
              onClick={() => setSelectedImage(memories[0])}
            />

            {/* Top right */}

            <GalleryCard
              memory={memories[1]}
              className="md:col-span-5"
              aspect="aspect-[4/3]"
              onClick={() => setSelectedImage(memories[1])}
            />

            {/* Bottom right */}

            <GalleryCard
              memory={memories[2]}
              className="md:col-span-5"
              aspect="aspect-[4/3]"
              onClick={() => setSelectedImage(memories[2])}
            />

            {/* Full width */}

            <GalleryCard
              memory={memories[3]}
              className="md:col-span-12"
              aspect="aspect-[16/7]"
              onClick={() => setSelectedImage(memories[3])}
            />

            {/* Bottom left */}

            <GalleryCard
              memory={memories[4]}
              className="md:col-span-5"
              aspect="aspect-[4/3]"
              onClick={() => setSelectedImage(memories[4])}
            />

            {/* Bottom right */}

            <GalleryCard
              memory={memories[5]}
              className="md:col-span-7"
              aspect="aspect-[16/9]"
              onClick={() => setSelectedImage(memories[5])}
            />

          </div>

          {/* Gallery footer */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-16 text-center"
          >
            <p className="font-serif text-xl italic text-[#5b4035]">
              Every photograph tells a story.
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#8b7770]">
              Click any image to explore
            </p>
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#241b18]/95 p-5 backdrop-blur-md sm:p-10"
            onClick={() => setSelectedImage(null)}
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#e4d1a5]/30 text-[#f7f2ea] transition hover:bg-[#e4d1a5]/10 sm:right-8 sm:top-8"
              aria-label="Close gallery"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Previous */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e4d1a5]/30 text-[#f7f2ea] transition hover:bg-[#e4d1a5]/10 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e4d1a5]/30 text-[#f7f2ea] transition hover:bg-[#e4d1a5]/10 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>

            {/* Image */}

            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative flex max-h-[90vh] max-w-5xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] max-w-full object-contain"
              />

              <div className="mt-6 text-center">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#c8a96b]">
                  {selectedImage.year}
                </p>

                <h3 className="mt-2 font-serif text-3xl text-[#f7f2ea]">
                  {selectedImage.title}
                </h3>

                <p className="mt-2 text-sm text-[#eee4d4]/70">
                  {selectedImage.caption}
                </p>

                <p className="mt-4 text-[8px] uppercase tracking-[0.3em] text-[#eee4d4]/40">
                  {currentIndex + 1} / {memories.length}
                </p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ==================================================
   Gallery Card
================================================== */

function GalleryCard({
  memory,
  className = "",
  aspect = "",
  onClick,
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`group relative w-full overflow-hidden text-left ${className} ${aspect}`}
    >
      {/* Image */}

      <motion.img
        src={memory.image}
        alt={memory.title}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.04 }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.06 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#241b18]/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Border */}

      <div className="absolute inset-4 border border-[#e4d1a5]/0 transition-all duration-500 group-hover:border-[#e4d1a5]/50" />

      {/* Content */}

      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">

        <p className="text-[9px] uppercase tracking-[0.4em] text-[#e4d1a5]">
          {memory.year}
        </p>

        <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
          {memory.title}
        </h3>

        <p className="mt-2 max-w-md text-xs leading-6 text-white/70">
          {memory.caption}
        </p>

      </div>

      {/* View indicator */}

      <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="text-lg">+</span>
      </div>
    </motion.button>
  );
}