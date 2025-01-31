import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TitleProps = {
  mainHeading: string;
  subHeading: string;
  animateTitle?: boolean;
  subClass?: string;
  mainClass?: string;
  containerClass?: string;
};

const Title = ({
  mainHeading,
  subHeading,
  animateTitle = false,
  mainClass,
  subClass,
  containerClass,
}: TitleProps) => {
  const Comp = animateTitle ? motion.h1 : "h1";
  return (
    <div className={cn(containerClass)}>
      <div
        className={cn(
          "text-blue-400 sm:text-sm font-medium uppercase  tracking-wider mb-2 md:mb-3",
          subClass
        )}
      >
        {subHeading}
      </div>
      <Comp
        initial={
          animateTitle
            ? {
                scale: 0,
                opacity: 0,
                originX: 0.8,
              }
            : undefined
        }
        animate={
          animateTitle
            ? {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                },
              }
            : undefined
        }
        className={cn(
          "xl:text-6xl font-bold mb-3 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-gray-900",
          mainClass
        )}
      >
        {mainHeading}
      </Comp>
    </div>
  );
};

export default Title;
