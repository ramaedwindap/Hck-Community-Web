import React from "react";

export default function PostCardSkeleton() {
  return (
    <div>
      <div className="-mx-4 overflow-hidden bg-white border border-gray-100 shadow-sm sm:rounded-2xl sm:mx-0">
        <div className="h-56 bg-gray-300 animate-pulse"></div>

        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>

            <div className="space-y-2">
              <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-16 h-3 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="flex mb-1 text-sm font-semibold pl-14">
            <div className="animate-pulse rounded bg-gray-300 h-4 w-4 mr-2 mt-[1px]"></div>
            <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="pl-14">
            <div className="w-3/4 h-6 py-1 mt-4 text-xl font-bold text-gray-900 bg-gray-300 rounded-lg animate-pulse md:text-2xl lg:text-3xl"></div>
          </div>

          <div className="flex flex-wrap py-2 pl-[52px]">
            <div className="w-20 h-4 m-1 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="w-16 h-4 m-1 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="w-12 h-4 m-1 bg-gray-300 rounded-md animate-pulse"></div>
          </div>

          <div className="flex items-center justify-end gap-1 mt-4 text-xs font-medium group text-slate-700">
            <div className="w-16 h-3 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-4 h-4 ml-2 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
