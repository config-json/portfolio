import Button from "@/components/Button";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  reverse: boolean;
  image: string;
  website: string;
  more: string;
};

export default function Work({
  title,
  description,
  reverse,
  image,
  website,
  more,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-3xl border-2",
        reverse ? "sm:flex-row-reverse" : "sm:flex-row",
      )}
    >
      <Image
        src={image}
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
          <Link href={more} target="_blank">
            <Button accent={true}>More</Button>
          </Link>
          <Link href={website} target="_blank">
            <Button>Website</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
