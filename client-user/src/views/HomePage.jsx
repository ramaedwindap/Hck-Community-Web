import React from "react";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="relative grid grid-cols-12 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
        <div className="col-span-12 col-start-0">
          <div className="flex flex-row">
            <div className="hidden md:block w-[260px] shrink-0 mr-4">
              <div className="border border-slate-100 shadow-sm bg-white rounded-lg p-4">
                <div className="mb-5 font-bold text-xl text-slate-900">
                  DEV Community is a community of 1,133,658 amazing developers
                </div>
                <div className="mb-5">
                  We're a place where coders share, stay up-to-date and grow
                  their careers.
                </div>
                <div>
                  <button className="w-full hover:underline mb-1 border border-blue-500 px-3 py-2 rounded-lg text-center text-blue-600 hover:text-white font-semibold hover:bg-blue-600">
                    Create account
                  </button>
                  <button className="w-full hover:underline hover:bg-blue-50 px-3 py-2 rounded-lg hover:text-blue-600 text-center">
                    Log in
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <button className="w-full hover:underline mb-1 px-3 py-2 flex rounded-lg text-slate-800 hover:text-blue-800 hover:bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                    className="mr-2"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#A0041E"
                        d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                      ></path>
                      <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                      <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                      <path
                        fill="#66757F"
                        d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                      ></path>
                      <path
                        fill="#66757F"
                        d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                      ></path>
                      <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                      <path
                        fill="#55ACEE"
                        d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                      ></path>
                      <path
                        fill="#5C913B"
                        d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                      ></path>
                    </g>
                  </svg>{" "}
                  Home
                </button>
                <button className="w-full hover:underline mb-1 px-3 py-2 flex rounded-lg text-slate-800 hover:text-blue-800 hover:bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                    className="mr-2"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#FFD983"
                        d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                      ></path>
                      <path
                        fill="#D99E82"
                        d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                      ></path>
                      <path
                        fill="#C1694F"
                        d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                      ></path>
                    </g>
                  </svg>{" "}
                  Tags
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-full lg:mr-4">
              <div className="w-full flex py-2 font-semibold">
                <button className="px-3 py-2 rounded-lg hover:bg-white hover:text-blue-800">
                  Relevant
                </button>
                <button className="px-3 py-2 rounded-lg hover:bg-white hover:text-blue-800">
                  Latest
                </button>
                <button className="px-3 py-2 rounded-lg hover:bg-white hover:text-blue-800">
                  Top
                </button>
              </div>
              <div>
                <article className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ut a expedita vitae? Dolorem, dolorum? Illum,
                        totam ducimus. Facere numquam nisi, inventore recusandae
                        ad eveniet ex rerum corporis ipsa mollitia iure!
                      </p>
                    </a>

                    <p className="group mt-4 flex justify-end items-center gap-1 text-xs font-medium text-slate-700">
                      5 min read
                    </p>
                  </div>
                </article>
              </div>
              <div>
                <article className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ut a expedita vitae? Dolorem, dolorum? Illum,
                        totam ducimus. Facere numquam nisi, inventore recusandae
                        ad eveniet ex rerum corporis ipsa mollitia iure!
                      </p>
                    </a>

                    <div className="flex pl-14 flex-wrap py-2 gap-2">
                      <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
                        Test
                      </button>
                      <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
                        Comic
                      </button>
                      <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
                        Programming
                      </button>
                      <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
                        Javascript
                      </button>
                      <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
                        OOP
                      </button>
                      <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
                        ReactJS
                      </button>
                      <button className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800">
                        Test
                      </button>
                    </div>

                    <p className="group mt-4 flex justify-end items-center gap-1 text-xs font-medium text-slate-700">
                      5 min read
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="hidden lg:block w-[250px] shrink-0">Right</div>
          </div>
        </div>
      </div>
    </div>
  );
}
