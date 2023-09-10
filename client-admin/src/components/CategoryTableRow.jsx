import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory, fetchCategories } from "../store/actionCreator";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function CategoryTableRow({ category }) {
  const dispatch = useDispatch();
  //   console.log(categories);
  async function handleDelete(id) {
    const res = await dispatch(deleteCategory(id));

    if (res.success) {
      // console.log(res.success);
      toast.success(res.data.message);
      await dispatch(fetchCategories());
    } else {
      toast.error(res.error.message);
    }
  }

  return (
    <tr className="text-gray-800 bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium ">
        <p className="min-w-[200px]">{category?.name}</p>
      </th>
      <td className="px-6 py-4">{category?.createdAt}</td>
      <td className="px-6 py-4">{category?.updatedAt}</td>
      <td className="px-6 py-4">
        <div className="flex items-center ">
          <Link
            to={"/edit-category/" + category?.id}
            className="p-2 mr-2 border border-blue-800 rounded-md hover:text-blue-500 hover:border-blue-700 hover:bg-blue-50"
          >
            <PencilSquareIcon className="w-5 h-5" />
          </Link>
          <button
            onClick={() => handleDelete(category?.id)}
            className="p-2 border border-red-500 rounded-md hover:text-red-500 hover:border-red-700 hover:bg-red-50"
          >
            <TrashIcon className="w-5 h-5 " />
          </button>
        </div>
      </td>
    </tr>
  );
}
