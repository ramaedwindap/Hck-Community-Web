import React from "react";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="relative grid grid-cols-12 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
        <div className="col-span-12 col-start-0">
          <div className="flex flex-row">
            <Sidebar />
            <div className="flex flex-col space-y-2 w-full lg:mr-4">
              <div className="w-full flex py-2 font-semibold">
                <button className="px-3 py-2 rounded-lg hover:bg-white hover:text-blue-800">
                  Relevant
                </button>
                <button className="px-3 py-2 rounded-lg hover:bg-white hover:text-blue-800">
                  Latest
                </button>
                <button className="px-3 py-2 rounded-lg hover:bg-white hover:text-blue-800">
                  Top
                </button>
              </div>

              <PostCard />
            </div>
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
