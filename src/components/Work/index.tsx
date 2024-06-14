"use client"

import Button from "@/components/Button";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import More from "./More";
import work from "@/data/work.json";

type Props = {
  name: string;
  reverse: boolean;
};

export default function Work({
  reverse,
  name,
}: Props) {

  const [isMore, setIsMore] = useState(false);
  const _work = work.find((item) => item.name === name);

  if (!_work) {
    return
  }

  const { title, description, website } = _work;

  return (
    <div className="flex flex-col max-w-3xl">
      <div
        className={cn(
          "flex flex-col w-full border-2",
          reverse ? "sm:flex-row-reverse" : "sm:flex-row",
        )}
      >
        <Image
          src={`/${name}.png`}
          width={1024}
          height={1024}
          className={cn(
            reverse ? "sm:border-l-2" : "sm:border-r-2",
            "h-full w-full sm:h-[229px] lg:h-[205px] max-w-fit",
          )}
          alt={title}
        />
        <div className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl">{title}</h4>
            <p>{description}</p>
          </div>
          <div className="flex gap-6">
            <Button accent={true} onClick={() => setIsMore(!isMore)}>More</Button>
            <Link href={website} target="_blank">
              <Button>Website</Button>
            </Link>
          </div>
        </div>
      </div>
      {isMore && <More name={name} />}
    </div>
  );
}
