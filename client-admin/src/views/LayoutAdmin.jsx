import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function LayoutAdmin() {
  return (
    <div className="flex">
      <div className="hidden md:block w-[200px] shrink-0 mr-4">
        <div className="sticky inset-y-[100px]">
          <div className="w-full px-1 py-1.5 bg-white border shadow-lg rounded-xl">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full min-w-0 min-h-screen space-y-2 mt-7">
        <Outlet />
      </div>
    </div>
  );
}
