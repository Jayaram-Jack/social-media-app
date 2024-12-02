import { ButtonConfig } from "@/app/types/ui/button.config";
import React from "react";

interface ButtonProps {
  buttonProps: ButtonConfig;
}

const Button = ({ buttonProps }: ButtonProps) => {
  return (
    <button
      type={buttonProps?.type}
      onClick={buttonProps?.onClick}
      disabled={buttonProps?.disabled}
      className={`px-2 py-1 ${buttonProps?.className}`}
    >
      {/* className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-md 
                  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 
                  disabled:opacity-50 disabled:cursor-not-allowed ${buttonProps?.className}`}
    > */}
      {buttonProps?.name}
    </button>
  );
};

export default Button;
