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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const courses = [
  {
    image: "/course1.jpg",
    category: "WEB DEVELOPMENT",
    title: "Full-Stack Web Development",
    description:
      "Learn to build modern web applications from frontend to backend.",
    level: "Beginner",
  },
  {
    image: "/course2.jpg",
    category: "DATA SCIENCE",
    title: "Data Science",
    description:
      "Explore data, build models, and turn information into useful insights.",
    level: "Intermediate",
  },
  {
    image: "/course3.jpg",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Artificial Intelligence",
    description:
      "Understand intelligent systems and learn how modern AI applications are built.",
    level: "Advanced",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="px-8 py-24">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >

        {/* Section Header */}
        <motion.div variants={item} className="mb-12">
          <div className="mb-5 flex items-center gap-2 text-sm font-medium tracking-wide text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4D6B2F]" />
            EXPLORE OUR COURSES
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-gray-900 md:text-5xl">
              Learn something worth building.
            </h2>

            <p className="max-w-sm text-sm leading-6 text-gray-500 md:text-base">
              Structured courses designed to take you from learning the
              fundamentals to building real-world projects.
            </p>
          </div>
        </motion.div>

        {/* Courses */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={item}
              className="w-full"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Skill Level */}
                <div className="absolute top-5 right-5 rounded-xl border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-[2px]">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-medium text-white">
                      {course.level}
                    </p>

                    <span className="h-3 w-px bg-white/20" />

                    <p className="text-xs text-white/60">
                      Skill Level
                    </p>
                  </div>
                </div>
              </div>

              {/* Course Information */}
              <div className="mt-5">

                <p className="mb-2 text-xs font-medium tracking-[0.12em] text-gray-400">
                  {course.category}
                </p>

                <div className="flex items-start justify-between gap-6">

                  <div>
                    <h3 className="text-xl font-medium leading-tight tracking-tight text-gray-900">
                      {course.title}
                    </h3>

                    <p className="mt-3 max-w-[320px] text-sm leading-6 text-gray-500">
                      {course.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <button
                    className="group mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                    aria-label={`View ${course.title}`}
                  >
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={item}
          className="mt-12 flex justify-center"
        >
          <button onClick={(e) => {
    e.preventDefault();

    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
    });
  }} className="group rounded-full bg-gray-900 px-10 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            Explore Prices
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>

      </motion.div>

    </section>
  );
}
