import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actionCreator";

export default function FormPost({ handleSubmit, form, setForm }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // console.log(form);

  return (
    <div className="mt-4 overflow-x-auto border rounded-lg ">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="space-y-12">
          <div className="pb-12 border-b border-gray-900/10">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={form.title}
                    onChange={handleChange}
                    autoComplete="title"
                    className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    name="categoryId"
                    id="categoryId"
                    value={form.categoryId}
                    onChange={handleChange}
                    autoComplete="categoryId"
                    required
                    className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out bg-white border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                  >
                    {categories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="imgUrl"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image Url
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="imgUrl"
                    id="imgUrl"
                    value={form.imgUrl}
                    onChange={handleChange}
                    autoComplete="imgUrl"
                    required
                    className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tags
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    value={form.tags}
                    onChange={handleChange}
                    placeholder="#sports #ai #kocak"
                    required
                    className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                  />
                  <p className="mt-1 ml-1 text-[10px] hover:text-black text-slate-600">
                    use '#'' for separator, example:{" "}
                    <span className="ml-1 italic">#sports</span>
                  </p>
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    id="content"
                    name="content"
                    type="text"
                    value={form.content}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-6 gap-x-6">
          <button
            type="submit"
            className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
