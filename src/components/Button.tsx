import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "success" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  color?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "medium",
  color,
  iconLeft,
  iconRight,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-md font-medium transition-colors flex items-center justify-center",
        {
          "px-4 py-2 text-sm": size === "medium",
          "px-2 py-1 text-xs": size === "small",
          "px-6 py-3 text-base": size === "large",
          "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
          "bg-green-500 text-white hover:bg-green-600": variant === "success",
          "bg-gray-200 text-gray-700 hover:bg-gray-300":
            variant === "secondary",
          "bg-red-500 text-white hover:bg-red-600": variant === "danger",
          "opacity-50 cursor-not-allowed": disabled,
        },
        className
      )}
      style={{ backgroundColor: color }}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
