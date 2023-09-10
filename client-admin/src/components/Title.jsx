import React from "react";

export default function Title({ children }) {
  return (
    <div className="flex items-center md:text-[20px] justify-between mt-2 text-base font-medium text-slate-900 drop-shadow">
      {children}
    </div>
  );
}
