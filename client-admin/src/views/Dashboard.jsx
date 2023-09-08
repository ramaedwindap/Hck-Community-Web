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
      const access_token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoicmFtYWVkd2luZGFwIiwiZW1haWwiOiJyYW1hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInBob25lTnVtYmVyIjoiMDg3NzIyMjc1MDA1IiwiYWRkcmVzcyI6IkNpcmVib24iLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTA3VDExOjQ3OjEwLjQyOVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTA3VDExOjQ3OjEwLjQyOVoiLCJpYXQiOjE2OTQwODcyMzN9.VRIT7zWvq4iiWfCcFIgYnIDj7N1sRG2jdY1CSZqRn6s";
      const response = await fetch("http://localhost:3000/posts", {
        method: "GET",
        headers: { access_token },
      });
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
