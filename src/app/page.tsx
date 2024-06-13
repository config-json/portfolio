import React from "react";
import Link from "next/link";
import Work from "@/components/Work";
import Button from "@/components/Button";
import CustomTypewriter from "@/components/Typewriter";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  const work = [
    {
      name: "ember-finance",
      title: "Ember Finance",
      description:
        "A dApp that offers liquidity support to new tokens on the Ethereum chain",
      website: "https://ember.finance",
      reverse: false,
    },
    {
      name: "phantazm",
      title: "Phantazm",
      description:
        "A prominent decentralized lending platform operating on an L2 built on Polygon, zkEVM",
      website: "https://app.phantazm.com",
      reverse: true,
    },
    {
      name: "blurt",
      title: "Blurt",
      description:
        "A social platform to send and receive money seamlessly on the blockchain",
      website: "https://ethglobal.com/showcase/power-push-5y93i",
      reverse: false,
    },
    {
      name: "mktsuite",
      title: "MktSuite",
      description:
        "A developing range of everyday tools for traders across all markets",
      website: "https://mktclock.com",
      reverse: true,
    },
  ];

  return (
    <div className="max-w-screen flex flex-col gap-24">
      <div className="h-screen flex flex-col items-center justify-between">
        <Nav />
        <div className="flex flex-col gap-6 md  :gap-12 items-center">
          <CustomTypewriter />
          <h4 className="sm:text-xl lg:text-2xl text-center">
            {`const [ideas, setIdeas] = useState("code")`}
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
        <h2 className="text-purple text-6xl font-semibold">Work</h2>
        {work.map((item, index) => (
          <Work
            key={index}
            title={item.title}
            description={item.description}
            image={`/${item.name}.png`}
            website={item.website}
            reverse={item.reverse}
            more={`/work/${item.name}`}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
