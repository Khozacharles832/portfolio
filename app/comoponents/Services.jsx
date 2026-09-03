import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import MotionReveal from "./MotionReveal";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <MotionReveal>
        <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
        <h2 className="text-center text-5xl font-ovo">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I am a full stack developer from Johannesburg, ZA with 1 year of
          experience in React and React Native.
        </p>
      </MotionReveal>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <MotionReveal key={index} delay={index * 0.08}>
            <div className="border border-line bg-surface rounded-xl px-8 py-12 hover:shadow-card cursor-pointer hover:bg-elevated hover:border-accent hover:-translate-y-1 duration-300">
              <Image src={icon} alt="service" className="w-10" />
              <h3 className="text-lg my-4 text-ink">{title}</h3>
              <p className="text-sm text-muted leading-5">{description}</p>
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more...{" "}
                <Image src={assets.right_arrow} alt="image" className="w-4 dark:invert" />
              </a>
            </div>
          </MotionReveal>
        ))}
      </div>
    </div>
  );
};

export default Services;
