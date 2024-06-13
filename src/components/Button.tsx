import cn from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  accent?: boolean;
};

export default function Button({ children, onClick, accent }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        accent ? "bg-accent border-accent hover:border-white" : "border-white",
        "border-2 py-1.5 px-3 hover:bg-white hover:text-background rounded-sm transition duration-300",
      )}
    >
      {children}
    </button>
  );
}
