import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <RouterProvider router={router} />
    </div>
  );
}
