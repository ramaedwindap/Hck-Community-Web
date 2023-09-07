import { CommandLineIcon } from "@heroicons/react/24/outline";
import Title from "../components/Title";
import PostTable from "../components/PostTable";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(posts);

  async function fetchPosts() {
    try {
      const response = await fetch(
        "http://localhost:3000/posts?_expand=author&_embed=tags&_expand=category",
        { method: "GET" }
      );
      const result = await response.json();
      setPosts(result);
      setLoading(false);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl min-h-[500px]">
      <Title>
        <CommandLineIcon />
        Dashboard
      </Title>
      {loading ? (
        <div className="mt-5 text-center">Loading..</div>
      ) : (
        <div className="relative mt-4 overflow-x-auto border rounded-lg">
          <PostTable posts={posts} />
        </div>
      )}
    </div>
  );
}
