"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
  {
    quote:
      "SLC manpower made my job search so much easier! I found my dream role within weeks. The personalized recommendations were spot on.",
    name: "Priya S.",
    title: "Product Designer",
  },
  {
    quote:
      "As a recent graduate, SLC manpower provided me with the resources and opportunities I needed to kickstart my career. Highly recommend!",
    name: "Arjun K.",
    title: "Software Engineer Intern",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function SuccessStories() {
  return (
    <section className="bg-[var(--color-accent)]/10 dark:bg-[var(--color-dark-accent)]/20  p-6 md:p-8 lg:p-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center w-11/12 mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[var(--color-primary)] dark:text-[var(--color-dark-primary)]"
        >
          Real People, Real Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center gap-2 mt-10 text-[var(--color-accent)] dark:text-[var(--color-dark-accent)] font-bold hover:underline"
          >
            <span>Read More Success Stories </span>
            <FaArrowRightLong />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function TestimonialCard({ quote, name, title }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-lg"
    >
      <p className="text-lg italic text-[var(--color-text)] dark:text-[var(--color-dark-text)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-4 font-semibold text-[var(--color-primary)] dark:text-[var(--color-dark-primary)]">
        &ndash; {name}, {title}
      </p>
    </motion.div>
  );
}
