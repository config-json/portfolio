import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-8 items-center">
      <h4 className="text-2xl font-bold">
        config<span className="text-accent">.json</span>
      </h4>
      <div className="flex gap-8">
        <Link href={"/links"}>Links</Link>
        <Link href={"/#work"}>Work</Link>
      </div>
    </div>
  );
}
