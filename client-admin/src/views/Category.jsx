import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import CategoryTable from "../components/CategoryTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actionCreator";

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
        <FolderOpenIcon />
        Categories
      </Title>
      {loading ? (
        <div className="mt-5 text-center">Loading..</div>
      ) : (
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
              {categories.map((category) => {
                return <CategoryTable category={category} key={category.id} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
