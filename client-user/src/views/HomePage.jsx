import React from "react";

export default function HomePage() {
  return (
    <div className="relative grid grid-cols-12 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div className="col-span-12 col-start-0">
        <div className="flex flex-row">
          <div className="hidden md:block w-[280px] shrink-0 lg:pr-8">Left</div>
          <div className="flex flex-col space-y-8 w-full">Center</div>
          <div className="hidden lg:block w-[250px] shrink-0 lg:pr-8">
            Right
          </div>
        </div>
      </div>
    </div>
  );
}
