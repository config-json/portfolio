import { Work } from "./constants";
import { cn } from "@/domain/core/utils/cn";
import Image from "next/image";
import { FC } from "react";

export const More: FC<{ work: Work }> = ({ work }) => {
  return (
    <div
      className={cn(
        "border-2 border-t-0 border-white",
        "flex flex-col w-full p-6 gap-6",
      )}
    >
      <Image
        src={`/covers/${work.name}.png`}
        width={1024}
        height={256}
        alt={work.name}
        className="w-full h-auto"
      />
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl">{work.title}</h4>
        <ul className="flex flex-col gap-1 list-disc">
          {work.text.map((item, index) => {
            return <li className="ml-5" key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="flex flex-wrap gap-4">
        {work.tags.map((tag) => (
          <div
            key={tag}
            className="h-min py-1 px-3 bg-accent/30 rounded-md text-xs sm:text-sm md:text-base"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
