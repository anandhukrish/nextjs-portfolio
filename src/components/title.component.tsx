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
    <div className={cn("text-left", containerClass)}>
      <h3
        className={cn(
          "text-blue-400 text-sm font-medium uppercase  tracking-wider mb-3",
          subClass
        )}
      >
        {subHeading}
      </h3>
      <Comp
        initial={{
          scale: 0,
          opacity: 0,
          originX: 0.8,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.6,
          },
        }}
        className={cn(
          "text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400",
          mainClass
        )}
      >
        {mainHeading}
      </Comp>
    </div>
  );
};

export default Title;
