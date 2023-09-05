import React from "react";

export default function Title({ children }) {
  return (
    <div className="flex items-center gap-x-2 text-base font-medium text-slate-900 md:text-[20px] [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5] drop-shadow">
      {children}
    </div>
  );
}
