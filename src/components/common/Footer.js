"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Logo from "./Logo";

const footerLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { icon: <FaGithub />, href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] dark:bg-[var(--color-dark-background)] text-[var(--color-text)] dark:text-[var(--color-dark-text)] border-t-2 border-(--color-text)/10 dark:border-(--color-dark-text)/30 py-12 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Branding */}
        <div className="flex flex-col sm:col-span-3 lg:col-span-1 gap-4 lg:border-r border-(--color-text)/10 dark:border-(--color-dark-text)/10 pr-4">
          <Logo />
          <p className="text-lg text-(--color-text)/50 dark:text-(--color-dark-text)/50 leading-relaxed">
            Connecting talent with opportunity. Empowering job seekers to find
            their dream careers and grow.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4 md:border-r border-(--color-text)/10 dark:border-(--color-dark-text)/10 pr-4">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          {footerLinks.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="text-lg px-4 py-2 hover:text-[var(--color-accent)] dark:hover:text-[var(--color-dark-accent)] hover:bg-[var(--color-accent)]/5 dark:hover:bg-[var(--color-dark-accent)]/20 font-semibold rounded-b-lg transition-all"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Social & Subscribe */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon, href }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg p-4 rounded-full  hover:bg-[var(--color-alert)]/5 hover:scale-125 hover:text-alert dark:hover:text-dark-alert dark:hover:bg-[var(--color-dark-alert)]/50 transition-all"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 border-t-2 pt-6 text-center text-lg text-(--color-text) dark:text-(--color-dark-text) border-dark-background/20 dark:border-gray-700"
      >
        &copy; {new Date().getFullYear()} SLC manpower. All rights reserved.
      </motion.div>
    </footer>
  );
}
