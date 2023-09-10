import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTopTags } from "../store/actionCreator";
import PostCardSkeleton from "../components/PostCardSkeleton";
import RightbarSkeleton from "../components/RightbarSkeleton";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postReducer);
  const { topTags } = useSelector((state) => state.tagReducer);

  useEffect(() => {
    dispatch(fetchPosts()).finally(() => {
      setLoading(false);
    });

    dispatch(fetchTopTags());
    // fetchPosts();
    // fetchTopTags();
  }, []);

  return (
    <div className="relative grid grid-cols-12 p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="col-span-12 col-start-0">
        <div className="flex flex-row">
          <div className="hidden md:block w-[260px] shrink-0 mr-4">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full space-y-2 lg:mr-4">
            <div className="flex w-full py-2 font-semibold">
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
            {loading ? (
              <PostCardSkeleton />
            ) : (
              posts.map((post) => {
                return <PostCard key={post.id} post={post} />;
              })
            )}
          </div>
          {loading ? <RightbarSkeleton /> : <Rightbar topTags={topTags} />}
        </div>
      </div>
    </div>
  );
}
