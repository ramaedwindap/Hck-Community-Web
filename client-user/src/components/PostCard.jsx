import React from "react";
import { BookmarkIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import readingTime from "../../helper/readingTime";
import convertDate from "../../helper/convertDate";

export default function PostCard(props) {
  //   console.log(post);
  const { post } = props;
  //   console.log(props, "props post");
  return (
    <div>
      <article className="-mx-4 overflow-hidden bg-white border border-gray-100 shadow-sm sm:rounded-2xl sm:mx-0">
        <Link to={"/posts/" + post?.slug}>
          <img
            src={post?.imgUrl}
            alt={post?.title}
            className="object-cover w-full h-56"
          />
        </Link>

        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              alt={post?.author?.username}
              src={`https://ui-avatars.com/api/?name=${post?.author?.username}`}
              className="flex-none object-cover w-10 h-10 rounded-full"
            />

            <div>
              <p className="text-sm font-semibold">{post?.author?.username}</p>

              <div className="flow-root">
                <p className="text-sm">{convertDate(post?.createdAt)}</p>
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

          <Link to={"/posts/" + post?.slug}>
            <p className="py-1 text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl pl-14 line-clamp-2">
              {post?.title}
            </p>
          </Link>

          <div className="flex flex-wrap py-2 pl-11">
            {post?.tags?.map((tag) => {
              return (
                <button
                  key={tag.id}
                  className="px-3 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800"
                >
                  #{tag.name}
                </button>
              );
            })}
          </div>

          <p className="flex items-center justify-end gap-1 mt-4 text-xs font-medium group text-slate-700">
            {readingTime(post?.content)} min read
            <button>
              <BookmarkIcon className="w-4 h-4 ml-2 text-black" />
            </button>
          </p>
        </div>
      </article>
    </div>
  );
}
