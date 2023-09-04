import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";

export default function PostCard() {
  return (
    <div>
      <article className="overflow-hidden sm:rounded-xl border -mx-4 sm:mx-0 border-gray-100 bg-white shadow-sm">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-base font-medium">Claire Mac</p>

              <div className="flow-root">
                <p className="text-sm">Sep 4</p>
              </div>
            </div>
          </div>

          <a href="#">
            <p className="text-2xl pl-14 line-clamp-2 font-semibold text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut a
              expedita vitae? Dolorem, dolorum? Illum, totam ducimus. Facere
              numquam nisi, inventore recusandae ad eveniet ex rerum corporis
              ipsa mollitia iure!
            </p>
          </a>

          <div className="flex pl-14 flex-wrap py-2 gap-2">
            <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
              Test
            </button>
          </div>

          <p className="group mt-4 flex justify-end items-center gap-1 text-xs font-medium text-slate-700">
            5 min read
            <button>
              <BookmarkIcon className="h-4 w-4 ml-2 text-black" />
            </button>
          </p>
        </div>
      </article>
    </div>
  );
}
