import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { FolderOpenIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import CategoryTableRow from "../components/CategoryTableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actionCreator";
import { Link } from "react-router-dom";

export default function Category() {
  // const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);

  async function getCategories() {
    await dispatch(fetchCategories());
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  // console.log(posts);

  return (
    <div className="w-full p-4 min-h-[500px] bg-white border shadow-lg rounded-2xl">
      <Title>
        <div className="flex gap-x-2 [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5]">
          <FolderOpenIcon />
          Categories
        </div>
        <Link
          to="/create-category"
          className="p-2 -my-2 rounded-md text-slate-700 hover:text-slate-800 hover:shadow"
        >
          <PencilSquareIcon className="w-5 h-5" />
        </Link>
      </Title>
      <div className="relative mt-4 overflow-x-auto border rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Updated At
              </th>
              <th className="px-6 py-3 sr-only">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array(3)
                  .fill()
                  .map((_, i) => (
                    <tr key={i} className="text-gray-800 bg-white border-b">
                      <th scope="row" className="px-6 py-4">
                        <div className="min-w-[200px] h-4 bg-gray-300 rounded animate-pulse"></div>
                      </th>
                      <td className="px-6 py-4">
                        <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-[37.6px] h-[37.6px] bg-gray-300 rounded-lg animate-pulse"></div>
                          <div className="w-[37.6px] h-[37.6px] bg-gray-300 rounded-lg animate-pulse"></div>
                        </div>
                      </td>
                    </tr>
                  ))
              : categories.map((category) => {
                  return (
                    <CategoryTableRow category={category} key={category.id} />
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
