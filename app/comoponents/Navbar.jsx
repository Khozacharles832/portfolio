"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header background */}
      <div className="fixed right-0 top-0 w-11/12 -z-10 translate-y-[-80px]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo1}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>

        {/* Desktop navigation */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll ? "" : "bg-white/50 shadow-sm"
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
          <button type="button">
            <Image
              src={assets.moon_icon}
              alt="Toggle dark mode"
              className="w-6"
            />
          </button>

          {/* Desktop contact button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500"
        >
          {/* Close button */}
          <li className="absolute right-6 top-6">
            <button type="button" onClick={closeMenu} aria-label="Close menu">
              <Image
                src={assets.close_black}
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
      </nav>
    </>
  );
};

export default Navbar;
