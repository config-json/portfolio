export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 py-1.5 px-3 hover:bg-white hover:text-background rounded-sm transition duration-300"
    >
      {children}
    </button>
  );
}
