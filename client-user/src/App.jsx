import React from "react";
import HomePage from "./views/HomePage";
import PostPage from "./views/PostPage";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <HomePage /> */}
      {/* <PostPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}
