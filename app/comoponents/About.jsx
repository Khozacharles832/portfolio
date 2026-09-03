"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const About = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img2}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I am an experienced full stack developer with professional expertise
            in the field. Throughout my career, I have had the privilege of
            collaborating with prestigious organizations,contributing to their
            success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border border-line bg-surface rounded-xl p-6 cursor-pointer hover:bg-elevated hover:border-accent hover:-translate-y-1 duration-300 hover:shadow-card"
                key={index}
              >
                <Image src={isDark ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-ink">{title}</h3>
                <p className="text-muted text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-ink font-ovo">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-line bg-surface rounded-lg cursor-pointer hover:-translate-y-1 hover:border-accent duration-300"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
