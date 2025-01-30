"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

const ContentLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const notHomePage = pathname !== "/";
  return (
    <motion.div
      className={cn(
        "min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800",
        notHomePage && "py-20"
      )}
      initial={{
        y: "20px",
      }}
      animate={{
        y: 0,
        transition: { duration: 0.1 },
      }}
    >
      <div className="absolute inset-0 bg-section bg-cover bg-center opacity-5"></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(66, 153, 225, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
        }}
      ></div>
      <div
        className={cn(
          "container mx-auto p-6 relative z-10 ",
          !notHomePage && "flex flex-col md:flex-row items-center"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default ContentLayout;
