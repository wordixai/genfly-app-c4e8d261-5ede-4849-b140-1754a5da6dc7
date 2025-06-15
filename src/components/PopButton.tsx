import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PopButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const PopButton = ({ children, onClick, variant = "primary", size = "md", className = "" }: PopButtonProps) => {
  const baseClasses = "font-handwritten font-bold border-4 border-black transition-all duration-200 relative overflow-hidden";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-[4px_4px_0px_0px_#000]",
    secondary: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[4px_4px_0px_0px_#000]",
    accent: "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-[4px_4px_0px_0px_#000]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-lg rounded-xl",
    lg: "px-8 py-4 text-xl rounded-2xl"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        boxShadow: "6px 6px 0px 0px #000"
      }}
      whileTap={{ 
        scale: 0.95,
        y: 2,
        boxShadow: "2px 2px 0px 0px #000"
      }}
      onClick={onClick}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default PopButton;