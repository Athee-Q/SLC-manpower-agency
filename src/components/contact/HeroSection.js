"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative  bg-background dark:bg-dark-background  dark:text-dark-text overflow-hidden">
      <motion.video
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/th-contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <div className="absolute inset-0 bg-[var(--color-text)]/50 dark:bg-[var(--color-dark-background)]/80 z-10" />
      <motion.div
        initial={{ opacity: 1, x: -2000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
        style={{ clipPath: "polygon(0% 0%, 70% 0%, 60% 100%, 0% 100%)" }}
        className="relative bg-primary dark:bg-dark-primary text-white z-10 w-full flex flex-col items-start justify-center p-6 md:p-8 lg:p-10 "
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Need Assistance or Have a Question?
        </h1>

        <h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-3xl font-medium mb-6 text-text dark:text-accent-accent"
        >
          We&apos;re here to help — every step of the way.
        </h2>

        <p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl leading-relaxed mb-8 "
        >
          Whether you&apos;re a job seeker, associate, business client, or
          exploring our services — your questions matter to us.
          <br />
          At <strong className="text-dark-text">SLC Manpower</strong>, we
          believe in prompt, personalized support that actually solves problems.
          <br />
          <br />
          Fill out the form below to get answers, report concerns, or explore
          how we can assist you. <br />
          <strong className="text-dark-text">
            Responsive. Reliable. Right here for you.
          </strong>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-background/30 dark:bg-dark-background/30 cursor-pointer hover:bg-accent dark:hover:bg-dark-accent transition-colors"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>

        <p className="mt-6 text-sm opacity-70">
          Expect a response within 1 business day.
        </p>
      </motion.div>
    </section>
  );
};
