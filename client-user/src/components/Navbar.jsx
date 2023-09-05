import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

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
            <Link
              to="/"
              className="p-2 mr-2 text-base font-bold tracking-wide text-white bg-black rounded-lg "
            >
              HCK
            </Link>
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

                <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
                  <div className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
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
              className="hidden px-3 py-2 text-sm font-medium border border-white rounded-lg md:block hover:underline hover:bg-blue-50 hover:border-blue-50 hover:text-blue-800"
            >
              Log in
            </a>
            <button className="p-2 rounded-lg md:hidden hover:bg-slate-300">
              <MagnifyingGlassIcon className="w-5 h-5 text-black" />
            </button>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-blue-800 border border-blue-800 rounded-lg hover:bg-blue-600 hover:text-white hover:underline"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
