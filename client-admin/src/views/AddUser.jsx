import { IdentificationIcon } from "@heroicons/react/24/outline";
import React from "react";
import Title from "../components/Title";

export default function AddUser() {
  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <IdentificationIcon />
        Add User
      </Title>
      <div className="mt-4 overflow-x-auto border rounded-lg ">
        <form className="p-4">
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
