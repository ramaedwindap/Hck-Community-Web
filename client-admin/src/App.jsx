import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
