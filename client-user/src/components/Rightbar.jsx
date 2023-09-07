import { BookmarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import React from "react";
import readingTime from "../../helper/readingTime";

export default function Rightbar({ topTags }) {
  return (
    <div className="hidden lg:block w-[250px] shrink-0 space-y-2">
      {topTags.map((tag, i) => {
        return (
          <div
            className="overflow-hidden bg-white border shadow-sm border-slate-100 rounded-xl"
            key={i}
          >
            <div className="p-4 text-base font-semibold text-slate-900">
              #{tag.tagName}
            </div>
            {tag.posts.map((post) => (
              <div
                className="p-4 text-sm text-justify border-t text-slate-900"
                key={post.id}
              >
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                <p className="flex items-center justify-end gap-1 mt-4 text-xs font-medium group text-slate-700">
                  {readingTime(post?.content)} min read
                  <button>
                    <BookmarkIcon className="w-4 h-4 ml-2 text-black" />
                  </button>
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
