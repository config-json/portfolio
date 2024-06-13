"use client";

import React, { useState, useEffect } from "react";
import { redirect, useParams } from "next/navigation";
import work from "@/data/work.json";
import Image from "next/image";
import Link from "next/link";
import cn from "@/utils/cn";

export default function CurrentWork() {
  const params = useParams();

  const slugData = work.find((index) => index.name === params.slug);
  const slugIndex = work.findIndex((item) => item.name === params.slug);

  useEffect(() => {
    if (slugIndex === -1) {
      redirect("/work");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-16 py-8 md:py-16 pb-20 md:pb-28 px-8 md:px-16 max-w-7xl">
          <div className="w-full">
            <Image
              priority
              src={`/covers/${slugData?.name}.png`}
              width={6000}
              height={2000}
              alt="banner"
            />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-between lg:items-center">
              <h1 className="text-2xl md:text-4xl">
                {slugData?.title.toUpperCase()}
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-6">
                {slugData?.tags.map((item) => (
                  <div className="h-min py-1 px-3 bg-purple rounded-md text-xs sm:text-sm md:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {slugData?.text.map((item) => (
              <div className="flex flex-col gap-8 md:gap-6">
                <h2 className="text-xl md:text-2xl font-medium">
                  {item.title}
                </h2>
                {item.paragraphs.map((paragraph) => (
                  <p className="line-height">{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex fixed bottom-0 w-full">
        <Link
          href={slugData?.website !== undefined ? slugData?.website : ""}
          target="_blank"
          className="w-1/3 bg-accent py-3 text-center hover:bg-white hover:text-background transition duration-300"
        >
          Website
        </Link>
        <Link
          className={cn(
            slugIndex === 0
              ? "bg-[#2A2E3B]"
              : "bg-disabledAccent hover:bg-white hover:text-background transition duration-300",
            "w-1/3 py-3 text-center",
          )}
          href={slugIndex > 0 ? `/work/${work[slugIndex - 1].name}` : ""}
        >
          {"< Previous"}
        </Link>
        <Link
          className={cn(
            slugIndex === work.length - 1
              ? "bg-[#2A2E3B]"
              : "bg-disabledAccent hover:bg-white hover:text-background transition duration-300",
            "w-1/3 py-3 text-center",
          )}
          href={
            work.length > slugIndex + 1
              ? `/work/${work[slugIndex + 1].name}`
              : ""
          }
        >
          {"Next >"}
        </Link>
      </div>
    </>
  );
}
