import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutApp() {
  return (
    <>
      <Navbar />
      <div className="p-4 mx-auto 12 max-w-7xl sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </>
  );
}
