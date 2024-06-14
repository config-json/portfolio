import cn from "@/utils/cn";
import work from "@/data/work.json";
import Image from "next/image";

type Props = {
  name: string;
};

export default function More({ name }: Props) {
  const _work = work.find((x) => x.name === name);

  if (!_work) {
    return;
  }

  const { title, text, tags } = _work;

  return (
    <div
      className={cn(
        "border-2 border-t-0 border-white",
        "flex flex-col w-full p-6 gap-6",
      )}
    >
      <Image
        src={`/covers/${name}.png`}
        width={1024}
        height={1024}
        alt={name}
        className="w-full h-auto"
      />
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl">{title}</h4>
        <ul>
          {text.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </div>
      <div className="flex flex-wrap gap-4">
        {tags.map((item) => (
          <div
            key={item}
            className="h-min py-1 px-3 bg-accent/30 rounded-md text-xs sm:text-sm md:text-base"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
