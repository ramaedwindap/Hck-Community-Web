import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function CategoryTable({ categories }) {
  //   console.log(categories);
  return (
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
        {categories.map((category) => {
          return (
            <tr className="text-gray-800 bg-white border-b" key={category.id}>
              <th scope="row" className="px-6 py-4 font-medium ">
                <p className="min-w-[200px]">{category?.name}</p>
              </th>
              <td className="px-6 py-4">{category?.createdAt}</td>
              <td className="px-6 py-4">{category?.updatedAt}</td>
              <td className="px-6 py-4">
                <div className="flex items-center ">
                  <button className="p-2 mr-2 border border-blue-800 rounded-md hover:text-blue-500 hover:border-blue-700 hover:bg-blue-50">
                    <PencilSquareIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 mr-2 border border-red-500 rounded-md hover:text-red-500 hover:border-red-700 hover:bg-red-50">
                    <TrashIcon className="w-5 h-5 " />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
