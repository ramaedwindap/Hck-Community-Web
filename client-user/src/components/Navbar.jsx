import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl xl:px-8">
        <div className="flex items-center justify-between w-full px-4 py-2 sm:px-6 lg:px-8 xl:px-0">
          <div className="flex items-center">
            <button className="md:hidden mr-2 p-2 rounded-lg hover:bg-slate-300">
              <div className="sr-only">Navigation Bar</div>
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
            <div className="mr-2 tracking-wide p-2 rounded-lg bg-black text-white text-base font-bold ">
              HCK
            </div>
            <div className="hidden md:block w-full max-w-[300px]">
              <div className="relative">
                <label htmlFor="Search" className="sr-only">
                  {" "}
                  Search{" "}
                </label>

                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full border rounded-lg border-gray-200 py-2.5 pl-3 pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <div className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="hidden md:block px-3 py-2 font-medium rounded-lg text-sm hover:underline hover:bg-blue-50 border border-white hover:border-blue-50 hover:text-blue-800"
            >
              Log in
            </a>
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-300">
              <MagnifyingGlassIcon className="h-5 w-5 text-black" />
            </button>
            <a
              href="#"
              className="border border-blue-800 text-blue-800 px-3 py-2 text-sm rounded-lg hover:bg-blue-600 hover:text-white font-medium hover:underline"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
