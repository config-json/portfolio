"use client"

import React, { useEffect, useRef } from "react";
import Work from "@/components/Work";
import work from "@/data/work.json";
import CustomTypewriter from "@/components/Typewriter";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";
import useHash from "@/hooks/useHash";

export default function Home() {
  const _works = work.map(item => item.name)
  
  const hash = useHash()
  const workRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hash === "#work") {
      workRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [hash])

  return (
    <div className="max-w-screen flex flex-col gap-24">
      <div className="h-screen flex flex-col items-center justify-between">
        <Nav />
        <div className="flex flex-col gap-6 md  :gap-12 items-center">
          <CustomTypewriter />
          <h4 className="sm:text-xl lg:text-2xl text-center px-8 py-4 bg-contrast rounded-md">
            <span className="text-purple">{`const [`}</span>
            <span className="text-red">{`ideas`}</span>
            <span>{`,`}</span>{" "}
            <span className="text-red">{`setIdeas`}</span>
            <span className="text-purple">{`] = `}</span>
            <span className="text-accent">{`useState`}</span>
            <span className="text-purple">{`(`}</span>
            <span className="text-green">{`"code"`}</span>
            <span className="text-purple">{`)`}</span>
          </h4>
        </div>
        <div className="w-full flex gap-3 pb-6 justify-center">
          <p>Scroll</p>
          <Image src="/icons/down.svg" width={24} height={24} alt="down" />
          <p>Down</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 px-8 md:gap-16 md:px-16 justify-center">
        <div className="flex flex-col gap-2 w-full lg:w-1/2 max-w-3xl">
          <h3 className="text-2xl md:text-4xl font-medium text-accent">
            ABOUT
          </h3>
          <p>
            “config.json” is a pro&shy;duct of bran&shy;ding
            cre&shy;a&shy;ti&shy;vi&shy;ty. It’s a sim&shy;ple and
            me&shy;mo&shy;rable name, yet com&shy;plex at its core. The
            pie&shy;ces on this port&shy;fo&shy;lio aren’t any different.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-1/2 max-w-3xl">
          <h3 className="text-2xl md:text-4xl font-medium text-accent">
            SERVICES
          </h3>
          <p>
            From your busi&shy;ness idea, to a usable de&shy;sign and code.
            Bran&shy;ding, wire&shy;fra&shy;ming and most of your fron&shy;tend
            de&shy;ve&shy;lop&shy;ment needs are in&shy;clu&shy;ded.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center px-8 md:px-16">
        <h2 ref={workRef} className="text-purple text-6xl font-semibold">Work</h2>
        {_works.map((item, index) => (
          <Work
            key={index}
            reverse={index % 2 !== 0}
            name={item}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
