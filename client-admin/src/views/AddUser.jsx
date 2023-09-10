import { IdentificationIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Title from "../components/Title";
import { useDispatch } from "react-redux";
import { addUser } from "../store/actionCreator";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await dispatch(addUser(form));

    if (res.success) {
      // console.log(res.data); // toast alert
      toast.success(res.data.message);
      navigate("/");
    } else {
      // console.log(res.error);
      toast.error(res.error.message);
    }
  }

  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <div className="flex gap-x-2 [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5]">
          <IdentificationIcon />
          Add User
        </div>
      </Title>
      <div className="mt-4 overflow-x-auto border rounded-lg ">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-12">
            <div className="pb-12 border-b border-gray-900/10">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={form.username}
                      onChange={handleChange}
                      autoComplete="username"
                      className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      autoComplete="phoneNumber"
                      required
                      className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                      className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={form.address}
                      onChange={handleChange}
                      autoComplete="address"
                      required
                      className="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
                    />
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
    </div>
  );
}
