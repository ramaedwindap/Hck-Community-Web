import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Dashboard() {
  return (
    <div className="relative grid grid-cols-12 p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="col-span-12 col-start-0">
        <div className="flex flex-row">
          {/* SIDEBAR */}
          <div className="hidden md:block w-[200px] shrink-0 mr-4">
            <div className="sticky inset-y-[100px]">
              <div className="w-full px-1 py-1.5 bg-white border shadow-lg rounded-xl">
                <div className="font-medium text-black flex items-center rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3">
                  <UserCircleIcon className="w-5 h-5 drop-shadow-sm" />
                  <span className="drop-shadow-sm">Rama Edwinda</span>
                </div>
                <div className="px-2.5">
                  <div className="block w-full h-px my-1 bg-gradient-to-r from-slate-500 via-slate-200"></div>
                </div>
                <a
                  href=""
                  className="text-black flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
                >
                  <UserCircleIcon className="w-5 h-5 drop-shadow-sm" />
                  <span className="drop-shadow-sm">Dashboard</span>
                </a>
                <a
                  href=""
                  className="text-black flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
                >
                  <UserCircleIcon className="w-5 h-5 drop-shadow-sm" />
                  <span className="drop-shadow-sm">Categories</span>
                </a>
                <a
                  href=""
                  className="text-black flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
                >
                  <UserCircleIcon className="w-5 h-5 drop-shadow-sm" />
                  <span className="drop-shadow-sm">Register admin</span>
                </a>
                <div className="px-2.5">
                  <div className="block w-full h-px my-1 bg-gradient-to-r from-slate-500 via-slate-200"></div>
                </div>
                <a
                  href=""
                  className="text-black flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
                >
                  <UserCircleIcon className="w-5 h-5 drop-shadow-sm" />
                  <span className="drop-shadow-sm">Sign out</span>
                </a>
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <div className="flex mt-7 flex-col w-full space-y-2 h-[1000px]">
            <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
              asd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
