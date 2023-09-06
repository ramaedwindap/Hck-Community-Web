import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import CategoryTable from "../components/CategoryTable";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  // console.log(posts);

  async function fetchCategories() {
    try {
      const response = await fetch("http://localhost:3000/categories", {
        method: "GET",
      });
      const result = await response.json();
      setCategories(result);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl min-h-[500px]">
      <Title>
        <FolderOpenIcon />
        Categories
      </Title>
      <div className="relative mt-4 overflow-x-auto border rounded-lg ">
        <CategoryTable categories={categories} />
      </div>
    </div>
  );
}
