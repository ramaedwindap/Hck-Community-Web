import {
  ArrowLeftOnRectangleIcon,
  CommandLineIcon,
  FolderOpenIcon,
  IdentificationIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import Title from "../components/Title";
import PostTable from "../components/PostTable";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const response = await fetch(
        "http://localhost:3000/posts?_expand=author&_embed=tags&_expand=category",
        { method: "GET" }
      );
      const result = await response.json();
      setPosts(result);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <CommandLineIcon />
        Dashboard
      </Title>
      <div className="relative mt-4 overflow-x-auto border rounded-lg ">
        <PostTable />
      </div>
    </div>
  );
}
