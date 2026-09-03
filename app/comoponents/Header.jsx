"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

const Header = () => {
  const shouldReduceMotion = useReducedMotion();
  const transition = (delay = 0) => ({
    duration: shouldReduceMotion ? 0 : 0.65,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1],
  });

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.82, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...transition(), type: "spring", stiffness: 180, damping: 16 }}
      >
        <Image src={assets.profile_img2} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3 initial={shouldReduceMotion ? false : { y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition(0.12)} className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I&apos;m Charles Khoza.
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1 initial={shouldReduceMotion ? false : { y: 26, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition(0.22)} className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Web and Mobile applications developer based in Johannesburg
      </motion.h1>
      <motion.p initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition(0.32)} className="max-w-2xl mx-auto font-ovo">
        I am a full stack developer from Johannesburg, ZA with 1 year of
        experience in React and React Native.
      </motion.p>
      <motion.div initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition(0.42)} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 rounded-full bg-accent text-white flex items-center gap-2 shadow-card transition hover:bg-accent-strong hover:-translate-y-0.5"
          whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-line bg-surface flex items-center gap-2 transition hover:border-accent hover:text-accent hover:-translate-y-0.5"
          whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;
