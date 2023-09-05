import {
  ArrowLeftOnRectangleIcon,
  CommandLineIcon,
  FolderOpenIcon,
  IdentificationIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Title from "../components/Title";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="relative grid grid-cols-12 p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="col-span-12 col-start-0">
        <div className="flex flex-row">
          {/* SIDEBAR */}
          <Sidebar />
          {/* CONTENT */}
          <div className="flex mt-7 flex-col w-full space-y-2 h-[1000px]">
            <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
              <Title>
                <CommandLineIcon />
                Dashboard
              </Title>
              <div className="relative mt-4 overflow-x-auto border rounded-lg ">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
