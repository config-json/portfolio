import React from "react";
import Link from "next/link";
import Button from "../components/button";

export default function Links() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center pt-6 px-9">
        <h4 className="hidden sm:block text-2xl font-bold">
          config<span className="text-accent">.json</span>
        </h4>
        <div className="text-sm md:text-base flex justify-end items-center gap-9 w-full">
          <Link href={"/links"}>Links</Link>
          <Button link={true} href={"/work"}>
            Work
          </Button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-6 px-6 items-center justify-center">
        <h4 className="text-xl lg:text-2xl text-center">Socials</h4>
        <Link
          href={"https://twitter.com/config_json"}
          target="_blank"
          className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <g clip-path="url(#clip0_1036_28)">
              <path
                d="M11.9047 8.46958L19.3513 0H17.5873L11.1187 7.35251L5.956 0H0L7.80867 11.1194L0 19.9999H1.764L8.59067 12.2338L14.044 19.9999H20M2.40067 1.30158H5.11067L17.586 18.7623H14.8753"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0_1036_28">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>@config_json</p>
        </Link>
        <Link
          href={"https://medium.com/@config.json"}
          target="_blank"
          className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <g clip-path="url(#clip0_1036_48)">
              <path
                d="M20 9.85653C20 12.506 19.556 14.6551 19.0081 14.6551C18.4602 14.6551 18.0164 12.5065 18.0164 9.85653C18.0164 7.20652 18.4604 5.05798 19.0081 5.05798C19.5558 5.05798 20 7.20633 20 9.85653Z"
                fill="inherit"
              />
              <path
                d="M17.4691 9.85646C17.4691 12.8142 16.2064 15.2129 14.6487 15.2129C13.0911 15.2129 11.8284 12.8142 11.8284 9.85646C11.8284 6.8987 13.0909 4.5 14.6485 4.5C16.2062 4.5 17.4689 6.89793 17.4689 9.85646"
                fill="inherit"
              />
              <path
                d="M11.2812 9.8565C11.2812 12.9988 8.75578 15.5461 5.6407 15.5461C2.52561 15.5461 0 12.9982 0 9.8565C0 6.71481 2.52542 4.16675 5.6407 4.16675C8.75598 4.16675 11.2812 6.71423 11.2812 9.8565Z"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0_1036_48">
                <rect width="20" height="20" fill="inherit" />
              </clipPath>
            </defs>
          </svg>
          <p>@config.json</p>
        </Link>
        <Link
          href={"https://youtube.com/@config_json"}
          target="_blank"
          className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <g clip-path="url(#clip0_1036_52)">
              <path
                d="M19.8008 6C19.8008 6 19.6055 4.62109 19.0039 4.01563C18.2422 3.21875 17.3906 3.21484 17 3.16797C14.2031 2.96484 10.0039 2.96484 10.0039 2.96484H9.99609C9.99609 2.96484 5.79687 2.96484 3 3.16797C2.60938 3.21484 1.75781 3.21875 0.996094 4.01563C0.394531 4.62109 0.203125 6 0.203125 6C0.203125 6 0 7.62109 0 9.23828V10.7539C0 12.3711 0.199219 13.9922 0.199219 13.9922C0.199219 13.9922 0.394531 15.3711 0.992187 15.9766C1.75391 16.7734 2.75391 16.7461 3.19922 16.832C4.80078 16.9844 10 17.0313 10 17.0313C10 17.0313 14.2031 17.0234 17 16.8242C17.3906 16.7773 18.2422 16.7734 19.0039 15.9766C19.6055 15.3711 19.8008 13.9922 19.8008 13.9922C19.8008 13.9922 20 12.375 20 10.7539V9.23828C20 7.62109 19.8008 6 19.8008 6ZM7.93359 12.5938V6.97266L13.3359 9.79297L7.93359 12.5938Z"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0_1036_52">
                <rect width="20" height="20" fill="inherit" />
              </clipPath>
            </defs>
          </svg>
          <p>@config_json</p>
        </Link>
      </div>
    </div>
  );
}
