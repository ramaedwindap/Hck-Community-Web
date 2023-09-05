import HomePage from "../views/HomePage";
import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../views/LayoutPage";
import PostPage from "../views/PostPage";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "posts/:slug",
        element: <PostPage />,
      },
    ],
  },
]);

export default router;
