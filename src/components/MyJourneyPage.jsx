import React from "react";
import JourneyTimeline from "./JourneyTimeline";

export default function MyJourneyPage() {
  return (
    <section >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          My Journey into Web Development
        </h1>
        <p className="text-lg opacity-70 mb-12">
          Here's a look at the path I’ve taken — from my early curiosity in coding to building full-fledged web apps.
        </p>
      </div>

      <div >
       <JourneyTimeline />
      </div>
    </section>
  );
}
