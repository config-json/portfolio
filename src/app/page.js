"use client";

import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./components/ui/button";

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-24">
      <div className="h-screen flex flex-col items-center justify-between">
        <div className="invisible md:visible flex justify-end pt-6 px-9 gap-9 w-full">
          <button>Contact</button>
          <Button>Work</Button>
        </div>
        <div className="flex flex-col gap-6 md  :gap-12 items-center">
          <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <Typewriter
              words={["config"]}
              loop={1}
              typeSpeed={150}
              delaySpeed={5000}
            />
            <span className="text-accent">.json</span>
          </h1>
          <h4 className="sm:text-xl lg:text-2xl text-center">
            const [ideas, setIdeas] = useState("code")
          </h4>
        </div>
        <div className="w-full flex gap-3 pb-6 justify-center">
          <p>Scroll</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.5 7V12M12.5 21C9.18629 21 6.5 18.3137 6.5 15V9C6.5 5.68629 9.18629 3 12.5 3C15.8137 3 18.5 5.68629 18.5 9V15C18.5 18.3137 15.8137 21 12.5 21Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p>Down</p>
        </div>
      </div>
    </div>
  );
}
