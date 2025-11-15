import React from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";

interface ButtonProps {
  title: string;
  size?: ButtonSize;   // optional, defaults to medium
  shape?: ButtonShape; // optional, defaults to rounded-md
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  // Map sizes to Tailwind classes
  const sizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <button
      className={`font-semibold bg-blue-500 text-white hover:bg-blue-600 transition ${sizeClasses[size]} ${shape}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
