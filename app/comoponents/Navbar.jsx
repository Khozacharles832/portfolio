"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const sideMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDark = resolvedTheme === "dark";

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Header background */}
      <div className="fixed right-0 top-0 w-11/12 -z-10 translate-y-[-80px]">
        <Image src={assets.header_bg_color} alt="" className="w-full opacity-70 transition-opacity duration-300 dark:opacity-15" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-surface/85 backdrop-blur-lg border-b border-line/70 shadow-card" : ""
        }`}
      >
        {/* Logo */}
        <a href="#top" className="mr-14 block w-28" aria-label="Charles Khoza home">
          <BrandLogo className="w-full" />
        </a>

        {/* Desktop navigation */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll ? "" : "bg-surface/75 border border-line/70 shadow-card backdrop-blur-sm"
          }`}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>

          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>

          <li>
            <a href="#work" className="font-ovo">
              My work
            </a>
          </li>

          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Dark mode button */}
          <button type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-accent hover:text-accent">
              <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="Toggle dark mode"
              className="w-6"
            />
          </button>

          {/* Desktop contact button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-line rounded-full ml-2 font-ovo transition hover:border-accent hover:bg-surface hover:text-accent"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3 dark:invert" alt="" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image src={isDark ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-elevated text-ink border-l border-line shadow-card-dark transition-transform duration-500"
        >
          {/* Close button */}
          <li className="absolute right-6 top-6">
            <button type="button" onClick={closeMenu} aria-label="Close menu">
              <Image
                src={isDark ? assets.close_white : assets.close_black}
                alt=""
                className="w-5 cursor-pointer"
              />
            </button>
          </li>

          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About me
            </a>
          </li>

          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>

          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              My work
            </a>
          </li>

          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
