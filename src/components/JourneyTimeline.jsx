import React from "react";
import { motion } from "motion/react";
import { journeyData } from "../data/journeyData";
import { Timeline } from "../ui/timeline";
import { HyperText } from "../ui/hyper-text";
import Carousel from "../ui/carousel";

export default function JourneyTimeline() {
  const data = journeyData.map((item) => ({
    title: item.year,
    content: (
      <div>
        <h1 className="mb-8 text-2xl md:text-3xl font-bold text-center">
          <HyperText className="inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
            {item.title}
          </HyperText>
        </h1>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {item.description}
        </p>

        <div className="grid grid-cols-2">
          {/* <Carousel images={item.images} /> */}
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
