"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] p-6 md:p-8 lg:p-10 overflow-hidden shadow-2xl">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/th-about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* 🔹 Overlay */}
      <div className="absolute w-full mx-auto inset-0 bg-[var(--color-text)]/60 dark:bg-[var(--color-dark-background)]/80 z-10" />
      <motion.div
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        style={{
          clipPath: "polygon(0% 25%, 100% 25%, 100% 75%, 0% 75%)",
        }}
        className="absolute w-[70vw] mx-auto inset-0 bg-[var(--color-text)] dark:bg-[var(--color-dark-background)] z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 2000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        style={{
          clipPath: "polygon(0% 25%, 100% 25%, 100% 75%, 0% 75%)",
        }}
        className="absolute w-[70vw] mx-auto inset-0 bg-[var(--color-text)] dark:bg-[var(--color-dark-background)] z-10"
      />
      <div className="relative z-20 flex flex-col items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-[var(--color-dark-primary)] dark:text-[var(--color-primary)] mb-6"
        >
          SLC Manpower: Bridging Ambition with Opportunity
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-[var(--color-dark-text)] mb-8 max-w-2xl"
        >
          At SLC Manpower, we don&apos;t just find jobs &ndash; we build
          futures. By combining innovation with a human touch, we connect talent
          to the right roles across industries and borders. Let’s create your
          success story together.
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
