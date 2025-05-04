import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className ="", ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-2xl font-medium transition duration-300 hover:opacity-90 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;