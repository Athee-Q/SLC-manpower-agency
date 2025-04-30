"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCard({ title, description, email }) {
    return (
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl shadow-md dark:shadow dark:shadow-gray-700 hover:shadow-lg hover:bg-accent/5 dark:hover:bg-dark-accent dark:hover:shadow-xl transition-all bg-white dark:bg-gray-800"
      >
        <div className="text-2xl font-semibold mb-2 text-primary dark:text-dark-primary">
          {title}
        </div>
        <div className="text-base mb-4">{description}</div>
        <Link
          href={`mailto:${email}`}
          className="text-accent dark:text-dark-accent font-bold hover:underline break-words"
        >
          {email}
        </Link>
      </motion.div>
    );
  }