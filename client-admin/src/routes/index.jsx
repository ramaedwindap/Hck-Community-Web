import { createBrowserRouter, redirect } from "react-router-dom";
import Post from "../views/Post";
import Category from "../views/Category";
import AddUser from "../views/AddUser";
import LayoutApp from "../views/LayoutApp";
import LayoutAdmin from "../views/LayoutAdmin";
import LoginPage from "../views/LoginPage";
import CreatePost from "../views/CreatePost";
import EditPost from "../views/EditPost";
import CreateCategory from "../views/CreateCategory";
import EditCategory from "../views/EditCategory";

const router = createBrowserRouter([
  {
    element: <LayoutApp />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
        loader: () => {
          const access_token = localStorage.access_token;
          if (access_token) {
            throw redirect("/");
          }
          return null;
        },
      },
      {
        loader: () => {
          const access_token = localStorage.access_token;
          if (!access_token) {
            throw redirect("/login");
          }
          return null;
        },
        element: <LayoutAdmin />,
        children: [
          {
            path: "/",
            element: <Post />,
          },
          {
            path: "/categories",
            element: <Category />,
          },
          {
            path: "/add-user",
            element: <AddUser />,
          },
          {
            path: "/create-post",
            element: <CreatePost />,
          },
          {
            path: "/edit-post/:slug",
            element: <EditPost />,
          },
          {
            path: "/create-category",
            element: <CreateCategory />,
          },
          {
            path: "/edit-category/:id",
            element: <EditCategory />,
          },
        ],
      },
    ],
  },
]);

export default router;
