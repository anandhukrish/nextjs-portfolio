import { CircleCheck, CopyIcon } from "lucide-react";
import React, { useState } from "react";

const CopyInfo = ({
  label,
  displayText,
}: {
  label: string;
  displayText: string;
}) => {
  const [copy, setCopy] = useState(false);
  async function handleCopyToClipboard(text: string) {
    setCopy(true);
    await window.navigator.clipboard.writeText(text);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCopy(false);
  }

  return (
    <div
      className="flex items-center justify-between w-full group cursor-pointer relative bg-gray-700/30 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
      onClick={() => handleCopyToClipboard(displayText)}
    >
      <div className="flex flex-col">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-gray-200">{displayText}</span>
      </div>
      {copy ? (
        <div className="relative">
          <span className="border bg-green-500 border-green-500 py-1 px-3 absolute bottom-[34px] right-0 rounded-lg">
            copied
          </span>
          <CircleCheck className="size-5 text-green-400 " />
        </div>
      ) : (
        <CopyIcon className="size-5 text-gray-400 hover:text-blue-400 transition-colors" />
      )}
    </div>
  );
};

export default CopyInfo;
