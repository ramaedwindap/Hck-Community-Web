import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import PostPage from "./views/PostPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HomePage />
      {/* <PostPage /> */}
    </div>
  );
}
