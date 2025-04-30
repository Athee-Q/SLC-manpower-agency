"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import {  MdHome, MdInfo, MdContactMail } from "react-icons/md";
import Logo from "./Logo";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigationLinks = [
    { name: "Home", href: "/", icon: <MdHome className="text-lg" /> },
    { name: "About", href: "/about", icon: <MdInfo className="text-lg" /> },
    {
      name: "Contact",
      href: "/contact",
      icon: <MdContactMail className="text-lg" />,
    },
  ];

  return (
    <header className="sticky z-50 top-0 left-0 w-full flex items-center justify-between h-18 md:h-20 lg:h-24 bg-white  dark:bg-gray-900 shadow-sm shadow-gray-300 ">
      {/* Logo */}
      <div className="w-full flex justify-between items-center px-4 lg:px-8 py-4 lg:py-6 ">
        <Logo />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className=" lg:hidden  text-2xl text-(--color-primary) dark:text-(--color-dark-primary) focus:outline-none"
        >
          <IoMenu />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-full items-center gap-8 ">
        <div className="flex items-center gap-4">
          {navigationLinks.map(({ name, href, icon }, index) => (
            <Link
              key={index}
              href={href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-[var(--color-text)] dark:text-[var(--color-dark-text)] hover:bg-[var(--color-primary)]/5 dark:hover:bg-[var(--color-dark-primary)]/10 hover:text-(--color-primary) dark:hover:text-(--color-dark-primary) transition-all duration-300 font-semibold text-xl"
            >
              {icon}
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex p-4 rounded-full  hover:bg-(--color-dark-text)/50 cursorpointer dark:hover:bg-(--color-dark-text)/20  text-(--color-text) dark:text-(--color-dark-text) hover:opacity-90 transition-all"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <button
            type="button"
            onClick={() => router.push("/auth/login")}
            className="hidden lg:block px-4 py-2  border-(--color-accent) dark:border-(--color-dark-accent) text-(--color-accent) dark:text-(--color-dark-accent) rounded-md font-bold border-2 cursor-pointer ring-(--color-dark-text)  hover:ring-2  transition-all"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => router.push("/auth/register")}
            className="hidden lg:block px-4 py-2 bg-(--color-alert) dark:bg-(--color-dark-alert) border-(--color-alert) dark:border-(--color-dark-alert) text-(--color-dark-text)  rounded-md font-bold border-2 cursor-pointer ring-(--color-dark-text)  hover:ring-2  transition-all"
          >
            Register
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col gap-6 px-6 py-8 z-50 animate-slide-in">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-[var(--color-primary)] dark:text-[var(--color-dark-primary)] focus:outline-none"
            >
              <IoIosClose />
            </button>
          </div>

          {navigationLinks.map(({ name, href, icon }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[var(--color-text)] dark:text-[var(--color-dark-text)] hover:bg-[var(--color-primary)]/5 dark:hover:bg-[var(--color-dark-primary)]/10 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-dark-primary)] transition-all duration-300 font-semibold text-xl"
            >
              {icon}
              {name}
            </Link>
          ))}

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={toggleTheme}
              className="flex justify-center items-center p-3 bg-gray-200 dark:bg-gray-700 rounded-full"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <button
              onClick={() => {
                router.push("/auth/login");
                setMenuOpen(false);
              }}
              className="px-4 py-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] dark:border-[var(--color-dark-primary)] dark:text-[var(--color-dark-primary)] rounded-md font-bold"
            >
              Login
            </button>
            <button
              onClick={() => {
                router.push("/auth/register");
                setMenuOpen(false);
              }}
              className="px-4 py-2 bg-[var(--color-accent)] dark:bg-[var(--color-dark-accent)] text-white rounded-md font-bold"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
