import { motion } from "motion/react";

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
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Enrol() {
  return (
    <section id="enrol" className="px-8 py-28">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-6xl"
      >

        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="mb-6 flex items-center gap-2 text-sm font-medium tracking-wide text-gray-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#4D6B2F]" />
          THE NEXT STEP
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

          {/* Heading */}
          <motion.h2
            variants={item}
            className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-gray-900 md:text-5xl"
          >
            Every developer, scientist, and engineer started by simply
            deciding to begin.
          </motion.h2>

          {/* Description + CTA */}
          <motion.div
            variants={item}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-base leading-7 text-gray-500 md:text-lg">
              You don't need years of experience or a perfect plan. You just
              need a place to start.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-500 md:text-lg">
              Algo Academy gives you structured learning paths, practical
              projects, and the skills to turn what you learn into something
              real.
            </p>

            <div className="mt-8">
              <button onClick={(e) => {
    e.preventDefault();

    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  }} className="group rounded-full bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                Start Learning
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}
