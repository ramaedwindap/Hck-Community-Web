import { IdentificationIcon } from "@heroicons/react/24/outline";
import React from "react";
import Title from "../components/Title";

export default function AddUser() {
  return (
    <div className="w-full p-4 h-[500px] bg-white border shadow-lg rounded-2xl">
      <Title>
        <IdentificationIcon />
        Add User
      </Title>
      <div className="relative mt-4 overflow-x-auto border rounded-lg ">
        Add User Form
      </div>
    </div>
  );
}
