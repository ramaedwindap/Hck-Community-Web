import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
