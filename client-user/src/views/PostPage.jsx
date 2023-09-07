import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/actionCreator";

export default function PostPage() {
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postReducer);

  // console.log(post);

  // console.log(post);
  useEffect(() => {
    dispatch(fetchPost(slug)).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="relative grid grid-cols-12 p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="col-span-12 col-start-0">
        <div className="flex flex-row">
          <div className="hidden md:block w-[65px] shrink-0 mr-4">
            <div className="sticky inset-y-[120px]">
              {loading ? (
                ""
              ) : (
                <div>
                  <div className="flex flex-col items-center">
                    <button>
                      <HeartIcon className="w-6 h-6 text-black" />
                    </button>
                    <p className="mt-2 text-sm ">17</p>
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <button>
                      <ChatBubbleOvalLeftIcon className="w-6 h-6 text-black" />
                    </button>
                    <p className="mt-2 text-sm ">17</p>
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <button>
                      <BookmarkIcon className="w-6 h-6 text-black" />
                    </button>
                    <p className="mt-2 text-sm ">17</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2 lg:mr-4">
            {loading ? (
              <p className="text-center">Loading..</p>
            ) : (
              <article className="-mx-4 overflow-hidden bg-white border border-gray-100 shadow-sm sm:rounded-2xl sm:mx-0">
                <img
                  src={post?.imgUrl}
                  alt={post?.title}
                  className="object-cover w-full min-h-[300px] max-h-[400px]"
                />

                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      alt={post?.author?.username}
                      src={`https://ui-avatars.com/api/?name=${post?.author?.username}`}
                      className="flex-none object-cover w-10 h-10 rounded-full"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        {post?.author?.username}
                      </p>

                      <div className="flow-root">
                        <p className="text-sm">{post?.createdAt}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-1 text-sm font-semibold pl-14">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 mt-[1px]"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"></path>
                    </svg>
                    {post?.categories?.name}
                  </div>

                  <p className="text-3xl font-semibold text-gray-900 pl-14">
                    {post?.title}
                  </p>

                  <div className="flex flex-wrap py-2 pl-11">
                    {post?.tags?.map((tag) => {
                      return (
                        <button
                          key={tag.id}
                          className="px-2 py-1.5 mb-2 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800"
                        >
                          #{tag.name}
                        </button>
                      );
                    })}
                  </div>

                  <p className="my-5 text-base text-gray-900 pl-14">
                    {post?.content}
                  </p>
                </div>
              </article>
            )}
          </div>
          <div className="hidden lg:block w-[250px] shrink-0">
            {loading ? (
              ""
            ) : (
              <div className="relative flex flex-col p-4 overflow-hidden bg-white border shadow-sm border-slate-100 rounded-xl">
                <div className="absolute top-0 left-0 right-0 bg-black h-7"></div>
                <div className="z-10 flex items-center gap-4 mb-4">
                  <img
                    alt={post?.author?.username}
                    src={`https://ui-avatars.com/api/?name=${post?.author?.username}`}
                    className="flex-none object-cover w-10 h-10 rounded-lg"
                  />

                  <div className="-mb-4">
                    <p className="text-base font-semibold line-clamp-1">
                      {post?.author?.username}
                    </p>
                  </div>
                </div>
                <button className="p-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Follow
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
