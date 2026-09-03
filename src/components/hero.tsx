"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const images = [
  "/hero.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col gap-2 px-4 sm:px-6 lg:flex-row lg:px-8">

      {/* Left Section */}
      <motion.div
        className="flex min-h-[70vh] flex-1 flex-col justify-center rounded-2xl bg-gradient-to-br from-[#2F4228] via-[#4D6B2F] to-[#D4E157] px-6 py-12 text-left text-white sm:px-8 md:px-10 lg:min-h-[80vh] lg:px-12 lg:py-0"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 8s ease infinite",
          willChange: "background-position, opacity, transform",
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="mb-6 flex items-center gap-2 text-sm font-medium tracking-wide text-white/75"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          MASTER COMPUTER SCIENCE
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl"
        >
          Learn the skills.
          <span className="block text-white/90">
            Build the future.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base font-normal leading-7 text-white/70 md:text-lg"
        >
          Go beyond tutorials. Master computer science through structured
          learning, real-world projects, and the skills that turn knowledge
          into software.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <button onClick={(e) => {
    e.preventDefault();

    document.getElementById("application")?.scrollIntoView({
      behavior: "smooth",
    });
  }} className="rounded-full bg-white px-10 py-3 text-sm font-medium text-gray-900 transition hover:bg-white/90 sm:px-14">
            Start Learning →
          </button>

          <button onClick={(e) => {
    e.preventDefault();

    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  }} className="rounded-full border border-white/30 bg-white/10 px-10 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-14">
            Explore Courses
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="relative min-h-[60vh] flex-1 overflow-hidden rounded-2xl sm:min-h-[65vh] lg:min-h-[80vh]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.15,
        }}
        style={{ willChange: "opacity, transform" }}
      >

        {/* Images */}
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${image}')`,
              willChange: "opacity",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Stats */}
        <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/20 bg-black/20 p-4 text-white backdrop-blur-[2px] sm:bottom-6 sm:left-6 sm:right-6 sm:p-6">
          <div className="grid grid-cols-2 divide-x divide-white/20 text-center">

            <div>
              <p className="text-2xl font-medium sm:text-3xl">1,000+</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">
                Students learning
              </p>
            </div>

            <div>
              <p className="text-2xl font-medium sm:text-3xl">200+</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">
                Career opportunities
              </p>
            </div>

          </div>
        </div>

      </motion.div>

    </section>
  );
}