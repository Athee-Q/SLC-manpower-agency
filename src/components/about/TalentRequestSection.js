"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TalentRequestSection = () => {
  return (
    <section className="relative bg-accent dark:bg-dark-accent text-dark-text py-20 px-4 sm:px-6 lg:px-12">
      <div className="w-11/12 mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
        >
          🔍 Looking for the Right Talent Partner?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-[--color-text] dark:text-[--color-dark-text]"
        >
          Finding the right candidate isn&apos;t just about resumes — it&apos;s about
          resonance. At{" "}
          <strong className="text-text dark:text-dark-primary ">
            SLC Manpower
          </strong>
          , we understand that every hire shapes the future of your business.
          With deep industry insight and a personal approach, we go beyond
          generic staffing &mdash; we connect you with talent that aligns with your
          vision, values, and growth goals.
          <br />
          <br />
          Whether you&apos;re a growing startup or a well&ndash;established enterprise,
          trust us to make recruitment effortless, efficient, and empowering.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link href="/contact" className="flex items-center justify-center">
            <div className=" px-6 py-3 text-white bg-dark-background/30 transition-all rounded-s-xl text-base sm:text-lg font-semibold ">
              Request Talent
            </div>
            <div className=" px-6 py-3 text-base sm:text-lg font-normal text-white bg-background/30 rounded-e-xl transition-all ">
              Fast response guaranteed &ndash; we&apos;ll get in touch within 1 business
              day.
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default TalentRequestSection;
