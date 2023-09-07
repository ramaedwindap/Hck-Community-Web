import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Category from "../views/Category";
import AddUser from "../views/AddUser";
import LayoutApp from "../views/LayoutApp";
import LayoutAdmin from "../views/LayoutAdmin";
import LoginPage from "../views/LoginPage";

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
            element: <Dashboard />,
          },
          {
            path: "/categories",
            element: <Category />,
          },
          {
            path: "/add-user",
            element: <AddUser />,
          },
        ],
      },
    ],
  },
]);

export default router;
