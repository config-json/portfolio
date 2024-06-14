import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Twitter from "@/components/icons/Twitter";
import Medium from "@/components/icons/Medium";
import YouTube from "@/components/icons/YouTube";
import GitHub from "@/components/icons/GitHub";

const SOCIALS = [
  {
    name: "Twitter",
    icon: <Twitter />,
    link: "https://twitter.com/config_json",
    tag: "@config_json",
  },
  {
    name: "Medium",
    icon: <Medium />,
    link: "https://medium.com/@config.json",
    tag: "@config.json",
  },
  {
    name: "YouTube",
    icon: <YouTube />,
    link: "https://youtube.com/@config_json",
    tag: "@config_json",
  },
  {
    name: "GitHub",
    icon: <GitHub />,
    link: "https://github.com/config-json",
    tag: "@config-json",
  },
];

export default function Links() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="w-full h-full flex flex-col gap-6 px-6 items-center justify-center">
        <h4 className="text-xl lg:text-2xl text-center">Socials</h4>
        {SOCIALS.map((social, index) => {
          return (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
            >
              {social.icon}
              <p>{social.tag}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
