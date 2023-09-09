import {
  ArrowLeftOnRectangleIcon,
  FolderOpenIcon,
  IdentificationIcon,
  NewspaperIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SidebarResponsive({ setOpen }) {
  const navigate = useNavigate();

  function handleSignOut() {
    setOpen(false);
    localStorage.removeItem("access_token");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  }

  return (
    <>
      <div className="font-medium text-black flex items-center rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3">
        <UserCircleIcon className="w-5 h-5 drop-shadow-sm" />
        <span className="drop-shadow-sm">Rama Edwinda</span>
      </div>
      <div className="px-2.5">
        <div className="block w-full h-px my-1 bg-gradient-to-r from-slate-500 via-slate-200"></div>
      </div>
      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="text-black flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
      >
        <NewspaperIcon className="w-5 h-5 drop-shadow-sm" />
        <span className="drop-shadow-sm">Posts</span>
      </Link>
      <Link
        to="/categories"
        onClick={() => setOpen(false)}
        className="text-black flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
      >
        <FolderOpenIcon className="w-5 h-5 drop-shadow-sm" />
        <span className="drop-shadow-sm">Categories</span>
      </Link>
      <Link
        to="/add-user"
        onClick={() => setOpen(false)}
        className="text-black flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
      >
        <IdentificationIcon className="w-5 h-5 drop-shadow-sm" />
        <span className="drop-shadow-sm">Register admin</span>
      </Link>
      <div className="px-2.5">
        <div className="block w-full h-px my-1 bg-gradient-to-r from-slate-500 via-slate-200"></div>
      </div>
      <button
        onClick={handleSignOut}
        className="text-black w-full flex items-center hover:bg-black hover:bg-opacity-10 rounded-md pl-2.5 py-2 text-sm gap-x-2 [&>svg]:w-[19px] [&>svg]:h-[19px] [&>svg]:stroke-[1.25] [&>svg]:hover:rotate-3"
      >
        <ArrowLeftOnRectangleIcon className="w-5 h-5 drop-shadow-sm" />
        <span className="drop-shadow-sm">Sign out</span>
      </button>
    </>
  );
}
