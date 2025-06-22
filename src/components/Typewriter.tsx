"use client";

import { Typewriter } from "react-simple-typewriter";

export default function CustomTypewriter() {
  return (
    <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
      <Typewriter
        words={["config"]}
        loop={1}
        typeSpeed={150}
        delaySpeed={5000}
      />
      <span className="text-accent">.json</span>
    </h1>
  );
}
