"use client";
import { cn } from "@/lib/utils";
import {motion} from "framer-motion";
import React from "react";


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
    return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
    >
      <span className={cn(
          `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r 
        from-amber-300 to-amber-500 dark:from-iamber-300 dark:to-amber-500 
        text-black dark:from-text-white dark:to-text-black`,
          className
      )}>
        {children}
      </span>
    </motion.span>
  );
};
