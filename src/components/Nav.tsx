import Link from "next/link";
import Button from "./Button";

export default function Nav() {
  return (
    <div className="flex justify-between items-center pt-6 px-9 w-full">
      <Link
        href="/"
        className="hidden sm:block text-2xl font-bold hover:opacity-70 transition duration-300"
      >
        config<span className="text-accent">.json</span>
      </Link>
      <div className="text-sm md:text-base flex justify-end items-center gap-9 w-full">
        <Link
          href={"/links"}
          className="hover:opacity-70 transition duration-300"
        >
          Links
        </Link>
        <Link href={"/#work"}>
          <Button background="stroke">Work</Button>
        </Link>
      </div>
    </div>
  );
}
