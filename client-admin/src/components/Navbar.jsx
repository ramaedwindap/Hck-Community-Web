import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl xl:px-8">
        <div className="flex items-center justify-between w-full px-4 py-2 sm:px-6 lg:px-8 xl:px-0">
          <div className="flex items-center">
            <button className="p-2 mr-2 rounded-lg md:hidden hover:bg-slate-300">
              <div className="sr-only">Navigation Bar</div>
              <Bars3Icon className="w-6 h-6 text-black" />
            </button>
            <div className="p-2 mr-2 text-base font-bold tracking-wide text-white bg-black rounded-lg ">
              HCK
            </div>
          </div>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-blue-800 border border-blue-800 rounded-lg hover:bg-blue-600 hover:text-white hover:underline"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
