import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function PostTable({ posts }) {
  // console.log(posts);
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Image
          </th>
          <th scope="col" className="px-6 py-3">
            Content
          </th>
          <th scope="col" className="px-6 py-3 ">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Author
          </th>
          <th className="px-6 py-3 sr-only">Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => {
          return (
            <tr className="text-gray-800 bg-white border-b" key={post.id}>
              <th scope="row" className="px-6 py-4 font-medium ">
                <p className="max-w-[200px]">{post?.title}</p>
              </th>
              <td className="px-6 py-4">
                <div className="w-[200px]">
                  <img
                    className="object-cover w-full rounded-lg h-28"
                    src={post?.imgUrl}
                    alt={post?.title}
                  />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="w-[300px]">
                  <p className="line-clamp-4">{post?.content}</p>
                </div>
              </td>
              <td className="px-6 py-4">{post?.category?.name}</td>
              <td className="px-6 py-4">{post?.author?.username}</td>
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
