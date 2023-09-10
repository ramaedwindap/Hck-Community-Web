import { NewspaperIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Title from "../components/Title";
import PostTableRow from "../components/PostTableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actionCreator";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { posts } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  async function getPosts() {
    await dispatch(fetchPosts());
    setLoading(false);
    // console.log(res);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-full min-h-[500px] p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <div className="flex gap-x-2 [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5]">
          <NewspaperIcon />
          Posts
        </div>
        <Link
          to="/create-post"
          className="p-2 -my-2 rounded-md text-slate-700 hover:text-slate-800 hover:shadow"
        >
          <PencilSquareIcon className="w-5 h-5" />
        </Link>
      </Title>
      {loading ? (
        <div className="mt-5 text-center">Loading..</div>
      ) : (
        <div className="relative mt-4 overflow-x-auto border rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Content
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th className="px-6 py-3 sr-only">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return <PostTableRow post={post} key={post.id} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
