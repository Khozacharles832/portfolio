import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my web portfolio! Explore a collection of projects showcasing
        my expertise in full stack applications development.
      </p>
      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden"
          >
            <div className="bg-surface/95 backdrop-blur-sm border border-line/70 w-10/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-muted">{project.description}</p>
              </div>
              <div className="border rounded-full border-line w-9 aspect-square flex items-center justify-center bg-accent text-white transition group-hover:bg-accent-strong">
                <Image src={assets.send_icon} alt="send-icon" className="w-5 invert" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-ink border border-line bg-surface rounded-full py-3 px-10 mx-auto my-20 hover:border-accent hover:text-accent hover:-translate-y-0.5 duration-300"
      >
        Shore more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4 dark:invert"
        />
      </a>
    </div>
  );
};

export default Work;
