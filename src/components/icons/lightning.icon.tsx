import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

const LightingIcon = ({ className }: { className: ClassValue }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-zap w-4 h-4 text-gray-400", className)}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
};

export default LightingIcon;
