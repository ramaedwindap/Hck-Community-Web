import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";

export default function PostCard(props) {
  //   console.log(post);
  const { post } = props;
  //   console.log(props, "props post");
  return (
    <div>
      <article className="-mx-4 overflow-hidden bg-white border border-gray-100 shadow-sm sm:rounded-2xl sm:mx-0">
        <img
          src={post?.imgUrl}
          alt={post?.title}
          className="object-cover w-full h-56"
        />

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
                <p className="text-sm">{post?.createdAt}</p>
              </div>
            </div>
          </div>

          <a href="#">
            <p className="text-3xl font-bold text-gray-900 pl-14 line-clamp-2">
              {post?.title}
            </p>
          </a>

          <div className="flex flex-wrap gap-2 py-2 pl-14">
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
            {post?.estimateRead} min read
            <button>
              <BookmarkIcon className="w-4 h-4 ml-2 text-black" />
            </button>
          </p>
        </div>
      </article>
    </div>
  );
}