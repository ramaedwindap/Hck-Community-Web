import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm border-slate-200">
      <div className="mx-auto max-w-7xl xl:px-8">
        <div className="flex items-center justify-between w-full px-4 py-3 sm:px-6 lg:px-8 xl:px-0">
          <div className="flex items-center drop-shadow-md">
            <div className="md:hidden mr-2">
              <div className="sr-only">Navigation Bar</div>
              <Bars3Icon className="h-6 w-6 text-black" />
            </div>
            <div className="mr-2">Logo</div>
            <div className="hidden md:block w-full bg-red-500 max-w-[300px]">
              Search
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:block">Login</div>
            <div className="md:hidden">
              <MagnifyingGlassIcon className="h-6 w-6 text-black" />
            </div>
            <div>Create Account</div>
          </div>
        </div>
      </div>
    </header>
  );
}
