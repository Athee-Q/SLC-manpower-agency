"use client";

import { motion } from "framer-motion";
import React from "react";

const stats = [
  { label: "Years of Workforce Expertise", value: "10+" },
  { label: "Industries Served", value: "12+" },
  { label: "Monthly Placements", value: "200+" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const StatsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 min-h-[60vh] flex items-center justify-center bg-primary dark:bg-dark-background text-[--color-text] dark:text-[--color-dark-text]">
      <div className="w-11/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Trusted By Talent & Employers Alike
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center ">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-background/70 dark:bg-background/70  hover:bg-background hover:dark:bg-background   transition-shadow duration-300"
            >
              <div className="text-4xl font-extrabold text-[--color-primary] dark:text-[--color-dark-accent] mb-2">
                {stat.value}
              </div>
              <p className="text-base font-medium text-[--color-text] dark:text-[--color-dark-text]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
