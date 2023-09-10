import React from "react";

export default function FormCategory({ handleSubmit, form, setForm }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="mt-4 overflow-x-auto border rounded-lg ">
      <form onSubmit={handleSubmit} className="m-4" action="">
        <div className="space-y-12">
          <div className="pb-6 border-b border-gray-900/10">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-4 gap-x-6">
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
