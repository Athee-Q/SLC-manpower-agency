"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href="/"
        className="flex items-center gap-3 group text-primary dark:text-dark-primary font-extrabold text-xl sm:text-2xl md:text-3xl"
      >
        <div className="relative  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ">
          <Image
            src="/images/icon.png"
            alt="SLC Manpower Logo"
            fill
            className="rounded-xl drop-shadow-md  duration-300"
          />
        </div>

        <span className="bg-gradient-to-r text-nowrap from-primary to-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent transition-colors duration-300">
          SLC Manpower
        </span>
      </Link>
    </motion.div>
  );
};

export default Logo;
