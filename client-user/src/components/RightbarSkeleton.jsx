import React from "react";

export default function RightbarSkeleton() {
  return (
    <div className="hidden lg:block w-[250px] shrink-0 space-y-2">
      <div className="overflow-hidden bg-white border shadow-sm border-slate-100 rounded-xl">
        <div className="p-4 animate-pulse">
          <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
        </div>

        <div className="p-4 border-t animate-pulse">
          <div className="w-full h-5 mb-4 bg-gray-300 rounded"></div>
          <div className="flex items-center justify-end gap-1 mt-4">
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
            <div className="w-4 h-4 ml-2 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
