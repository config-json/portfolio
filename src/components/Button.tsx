import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  background: "white" | "accent" | "stroke";
};

export default function Button({ children, onClick, background }: Props) {
  const classes = {
    common:
      "transition duration-300 rounded-sm border-2 py-1.5 px-3 hover:bg-white hover:text-background hover:border-white",
    backgrounds: {
      white: "bg-white text-background border-white hover:opacity-70",
      accent: "bg-accent text-white border-accent",
      stroke: "border-white text-white",
    },
  };

  return (
    <button
      onClick={onClick}
      className={cn(classes.common, classes.backgrounds[background])}
    >
      {children}
    </button>
  );
}
