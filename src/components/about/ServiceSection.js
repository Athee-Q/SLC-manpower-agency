"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const services = [
  {
    image: "/images/job-seekers.png",
    title: "Job Seekers",
    description:
      "We support individuals in finding fulfilling roles that match their skills, aspirations, and lifestyle — from entry-level positions to professional careers.",
  },
  {
    image: "/images/employers.png",
    title: "Employers",
    description:
      "We help companies build agile, skilled teams through precise hiring, proactive workforce planning, and reliable staffing services.",
  },
  {
    image: "/images/placement.png",
    title: "Career Growth",
    description:
      "Our support doesn’t end at placement — we offer guidance, upskilling advice, and ongoing assistance to help you thrive in your role.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const ServiceSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[--color-background] dark:bg-[--color-dark-background] text-[--color-text] dark:text-[--color-dark-text]">
      <div className="w-11/12	 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="bg-white dark:bg-dark-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-[40vh]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6 flex flex-col justify-between items-start  h-[50vh]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[--color-accent] dark:text-[--color-dark-accent] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[--color-text] dark:text-[--color-dark-text] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.90 }}
                  className=" py-2 px-4 bg-primary/5 dark:bg-dark-background text-primary font-semibold rounded-md transition duration-200 hover:opacity-90"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
