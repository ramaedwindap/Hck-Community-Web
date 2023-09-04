import { BookmarkIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Rightbar() {
  return (
    <div className="hidden lg:block w-[250px] shrink-0">
      <div className="border border-slate-100 shadow-sm bg-white rounded-xl overflow-hidden">
        <div className="font-semibold text-base text-slate-900 p-4">
          #discuss
        </div>
        <div className="text-sm border-t text-slate-900 text-justify p-4">
          Why every startup should be built on open-source... 🤔🤔
          <p className="group mt-4 flex justify-end items-center gap-1 text-xs font-medium text-slate-700">
            5 min read
            <button>
              <BookmarkIcon className="h-4 w-4 ml-2 text-black" />
            </button>
          </p>
        </div>
        <div className="text-sm border-t text-slate-900 text-justify p-4">
          Why every startup should be built on open-source... 🤔🤔
          <p className="group mt-4 flex justify-end items-center gap-1 text-xs font-medium text-slate-700">
            5 min read
            <button>
              <BookmarkIcon className="h-4 w-4 ml-2 text-black" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
