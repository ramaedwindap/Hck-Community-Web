import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  XMarkIcon,
  Bars3Icon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";

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
              <div className="p-2 mr-2 text-base font-bold tracking-wide text-white bg-black rounded-lg ">
                HCK
              </div>
            </div>
          </div>
        </div>
      </header>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setOpen}>
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

                        <div className="mt-8">
                          <div className="flow-root">
                            <Link
                              to="/"
                              className="flex items-center w-full px-3 py-2 rounded-lg hover:underline text-slate-800 hover:text-blue-800 hover:bg-blue-100"
                            >
                              <HomeModernIcon className="w-4 h-4 mr-2" /> Home
                            </Link>
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
