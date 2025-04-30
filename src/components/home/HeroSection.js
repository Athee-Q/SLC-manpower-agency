"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/jobs?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] p-6 md:p-8 lg:p-10 overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/th-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute w-full mx-auto inset-0 bg-[var(--color-text)]/60 dark:bg-[var(--color-dark-background)]/80 z-10" />
      {/* 🔹 Overlay */}
      <motion.div
          initial={{ opacity: 0, x: -2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        
        style={{
          clipPath:
            "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        }}
        className="absolute w-[70vw] mx-auto inset-0 bg-[var(--color-text)] dark:bg-[var(--color-dark-background)] z-10"
      />
      <motion.div
          initial={{ opacity: 0, x: 2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        
        style={{
          clipPath:
            "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        }}
        className="absolute w-[70vw] mx-auto inset-0 bg-[var(--color-text)] dark:bg-[var(--color-dark-background)] z-10"
      />

      {/* 🔹 Foreground Content */}
      <div className="relative z-20 flex flex-col items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-[var(--color-dark-primary)] dark:text-[var(--color-primary-primary)] mb-6"
        >
          Discover Your Perfect Career Match with SLC manpower
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-[var(--color-dark-text)] mb-8 max-w-2xl"
        >
          Explore thousands of exciting job opportunities from top companies,
          all tailored to your unique skills and aspirations. Let us help you
          unlock your potential and find the role you&apos;ve been searching
          for.
        </motion.p>

        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-md flex flex-col items-center mb-6 gap-6"
        >
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for jobs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-500 bg-(--color-primary)/30  bg-opacity-70 p-3 rounded-md text-accent placeholder:text-accent font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              type="submit"
              className="px-6 py-3 border-2 border-[var(--color-accent)] dark:border-[var(--color-dark-accent)] text-(--color-accent) dark:text-(--color-dark-accent) hover:bg-(--color-accent)/30 cursor-pointer font-bold rounded-lg text-lg hover:opacity-90 transition"
            >
              Browse Jobs
            </button>
            <Link href="/auth/register" className="px-6 py-3 border-2 border-[var(--color-primary)] dark:border-[var(--color-dark-primary)] text-(--color-primary) dark:text-(--color-dark-primary) hover:bg-(--color-primary)/30 cursor-pointer font-bold rounded-lg text-lg hover:opacity-90 transition">
                Get Started
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
