import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";

export default function PostCard(props) {
  //   console.log(post);
  const { post } = props;
  //   console.log(props, "props post");
  return (
    <div>
      <article className="overflow-hidden sm:rounded-2xl border -mx-4 sm:mx-0 border-gray-100 bg-white shadow-sm">
        <img
          src={post?.imgUrl}
          alt={post?.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              alt={post?.author?.username}
              src={`https://ui-avatars.com/api/?name=${post?.author?.username}`}
              className="h-10 w-10 rounded-full flex-none object-cover"
            />

            <div>
              <p className="text-sm font-semibold">{post?.author?.username}</p>

              <div className="flow-root">
                <p className="text-sm">{post?.createdAt}</p>
              </div>
            </div>
          </div>

          <a href="#">
            <p className="text-2xl pl-14 line-clamp-2 font-semibold text-gray-900">
              {post?.content}
            </p>
          </a>

          <div className="flex pl-14 flex-wrap py-2 gap-2">
            {post?.tags?.map((tag) => {
              return (
                <button
                  key={tag.id}
                  className="px-3 bg-green-50 py-1.5 rounded-lg text-xs border border-white hover:border-green-500 text-slate-800"
                >
                  #{tag.name}
                </button>
              );
            })}
          </div>

          <p className="group mt-4 flex justify-end items-center gap-1 text-xs font-medium text-slate-700">
            {post?.estimateRead} min read
            <button>
              <BookmarkIcon className="h-4 w-4 ml-2 text-black" />
            </button>
          </p>
        </div>
      </article>
    </div>
  );
}
