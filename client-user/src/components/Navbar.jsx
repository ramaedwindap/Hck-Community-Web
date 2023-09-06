import React, { Fragment, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl xl:px-8">
          <div className="flex items-center justify-between w-full px-4 py-2 sm:px-6 lg:px-8 xl:px-0">
            <div className="flex items-center">
              <button
                onClick={handleClick}
                className="p-2 mr-2 rounded-lg md:hidden hover:bg-slate-300"
              >
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 left-0 flex max-w-full pr-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="w-screen max-w-[280px] pointer-events-auto">
                    <div className="flex flex-col h-full bg-white shadow-xl">
                      <div className="flex-1 px-2 py-6 overflow-y-auto ">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="pl-2 text-lg font-bold text-gray-900">
                            HCK Community
                          </Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="relative p-1 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="flow-root">
                            <Sidebar />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
