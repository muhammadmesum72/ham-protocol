import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary"; // "primary" or "secondary"
  size?: "sm" | "md" | "lg"; // "sm", "md", "lg"
  className?: string; // Custom class for styling overrides
  disabled?: boolean;
  icon?: React.ReactNode; // React element for icon
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  icon,
}) => {
  // Define button size styles
  const sizeClasses = {
    sm: "h-[40px] min-w-[100px] text-[14px] px-3 leading-[14px]",
    md: "h-[50px] min-w-[130px] text-[16px] px-5 leading-[16px]",
    lg: "h-[60px] min-w-[150px] text-[18px] px-5 leading-[18px]",
  };

  // Define button variant styles
  const variantClasses = {
    primary:
      "bg-[#3E8DE3] text-white hover:bg-[#3E8DE3] active:bg-[#3E8DE3] drop-shadow-button-drop ",
    secondary:
      "bg-white text-[#3E8DE3] border-2 border-[#3E8DE3] hover:bg-[#f5f5f5] active:bg-[#e5e5e5]",
  };

  // Combine all styles using clsx
  const buttonClasses = clsx(
    "flex items-center justify-center cursor-pointer gap-3 rounded-[8px]  transition-all duration-300 ease-in-out ",
    sizeClasses[size],
    variantClasses[variant],
    disabled && "opacity-50 cursor-not-allowed", // Disabled state styling
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {icon && <div className="w-[20px]"> {icon} </div>}

      {children}
    </button>
  );
};

export default Button;
