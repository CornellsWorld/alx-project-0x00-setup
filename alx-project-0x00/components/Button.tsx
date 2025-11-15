import React from "react";

interface ButtonProps {
  title: string;
  className?: string; // optional additional styles
  onClick?: () => void; // optional click handler
}

const Button: React.FC<ButtonProps> = ({ title, className = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
