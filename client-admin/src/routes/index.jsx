import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/Layout";
import Dashboard from "../views/Dashboard";
import Category from "../views/Category";
import AddUser from "../views/AddUser";

const router = createBrowserRouter([
  {
    element: <Layout />,
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
]);

export default router;
