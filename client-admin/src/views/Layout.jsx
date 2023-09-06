import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="p-4 mx-auto 12 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col w-full min-w-0 space-y-2 mt-7 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
