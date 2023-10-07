import Button from "./button";
import Image from "next/image";

export default function Work({
  title,
  description,
  reverse,
  image,
  website,
  more,
}) {
  return (
    <div
      className={`${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } flex flex-col w-full max-w-3xl border-2`}
    >
      <Image
        src={image}
        width={1024}
        height={1024}
        className={`${
          reverse ? "sm:border-l-2" : "sm:border-r-2"
        } h-full w-full sm:h-[229px] lg:h-[205px] max-w-fit `}
      />
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl">{title}</h4>
          <p>{description}</p>
        </div>
        <div className="flex gap-6">
          <Button accent={true} link={true} href={more}>
            More
          </Button>
          <Button link={true} href={website}>
            Website
          </Button>
        </div>
      </div>
    </div>
  );
}
