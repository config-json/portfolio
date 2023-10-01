import Link from "next/link";

export default function Button({ children, onClick, accent, link, href }) {
  return (
    <>
      {link ? (
        <Link
          href={href}
          target="_blank"
          className={`${
            accent ? "bg-accent" : "border-2"
          } py-1.5 px-3 hover:bg-white hover:text-background rounded-sm transition duration-300`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${
            accent ? "bg-accent" : "border-2"
          } py-1.5 px-3 hover:bg-white hover:text-background rounded-sm transition duration-300`}
        >
          {children}
        </button>
      )}
    </>
  );
}
