import React from "react";
import Title from "../components/Title";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import PostTable from "../components/PostTable";

export default function Category() {
  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <FolderOpenIcon />
        Categories
      </Title>
      <div className="relative mt-4 overflow-x-auto border rounded-lg ">
        <PostTable />
      </div>
    </div>
  );
}
