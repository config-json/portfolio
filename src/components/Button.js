import cn from "@/utils/cn";

export default function Button({
  children,
  variant,
  onClick,
  size,
  color,
  className,
  disabled,
}) {
  const classes = {
    common: cn(
      "transition-opacity transition duration-300 flex items-center gap-2 justify-center cursor-pointer"
    ),
    disabled: "opacity-30 hover:opacity-30",
    variants: {
      empty: "hover:first:text-secondary",
      full: "hover:opacity-60 rounded-md",
      none: "",
    },
    sizes: {
      none: "",
      xs: "py-1 px-2 text-sm rounded-sm",
      sm: "",
      md: "px-4 py-2",
      lg: "px-6 py-3",
    },
    colors: {
      none: "",
      primary: "bg-primary",
      secondary: "bg-secondary",
      contrast: "bg-contrast",
      red: "bg-error",
      green: "bg-success",
      background: "bg-background",
    },
  };

  return (
    <div
      onClick={!disabled ? onClick : () => {}}
      className={cn(
        classes.common,
        classes.variants[variant],
        classes.sizes[size],
        classes.colors[color],
        disabled && classes.disabled,
        className
      )}
    >
      {children}
    </div>
  );
}
