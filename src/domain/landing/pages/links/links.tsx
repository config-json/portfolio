import Link from "next/link";
import { Header } from "@/domain/core/components/header";
import { Icon } from "@/domain/core/components/icon";

const SOCIALS = [
  {
    name: "Twitter",
    icon: <Icon.Twitter size={20} />,
    link: "https://twitter.com/config_json",
    tag: "@config_json",
  },
  {
    name: "GitHub",
    icon: <Icon.Github size={20} />,
    link: "https://github.com/config-json",
    tag: "@config-json",
  },
];

export const Links = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
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