import React from "react";
import { Timeline } from "../ui/timeline";
import Carousel from "../ui/carousel";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";

import { projectData } from "../data/project-images";

export default function ProjectTimeline() {
  const data = projectData.map((item) => ({
    title: item.year,
    content: (
      <div>
        <h1 className="mb-8 text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-5">
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub className=" inline-block text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
          </a>
          <span className="inline-block  bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
            {item.title}
          </span>
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLinkExternal className=" inline-block text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
          </a>
        </h1>

        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {item.description}
        </p>

        <div className="mb-8 space-y-2">
          {item.Bullet.map((point, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
            >
              {point}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2">
          <Carousel slides={item.images} />
        </div>
      </div>
    ),
  }));
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
