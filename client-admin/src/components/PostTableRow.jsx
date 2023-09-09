import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, fetchPosts } from "../store/actionCreator";
import { toast } from "react-hot-toast";

export default function PostTableRow({ post }) {
  // console.log(posts);
  const dispatch = useDispatch();

  async function handleDeletePost(id) {
    // console.log(id);
    const resDelete = await dispatch(deletePost(id));
    if (resDelete.success) {
      await dispatch(fetchPosts());
      console.log(resDelete); //install toast alert
      toast.success(resDelete.data.message);
    } else {
      toast.error(resDelete.error.message);
    }
  }

  return (
    <tr className="text-gray-800 bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium ">
        <p className="w-[200px]">{post?.title}</p>
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
      <td className="px-6 py-4">
        <div className="w-[300px]">
          <div className="flex flex-wrap">
            {post?.tags?.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className="px-3 cursor-none py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800"
                >
                  #{tag.name}
                </div>
              );
            })}
          </div>
        </div>
      </td>
      <td className="px-6 py-4">{post?.author?.username}</td>
      <td className="px-6 py-4">
        <div className="flex items-center ">
          <button className="p-2 mr-2 border border-blue-800 rounded-md hover:text-blue-500 hover:border-blue-700 hover:bg-blue-50">
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleDeletePost(post?.id)}
            className="p-2 mr-2 border border-red-500 rounded-md hover:text-red-500 hover:border-red-700 hover:bg-red-50"
          >
            <TrashIcon className="w-5 h-5 " />
          </button>
        </div>
      </td>
    </tr>
  );
}
