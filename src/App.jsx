import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddBook,
  EditBook,
  BookList,
  NotFound,
} from "./components/ReactLazyRoutes/ReactLazy";
import Layout from "./components/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <BookList />,
        },
        {
          path: "add-books",
          element: <AddBook />,
        },
        {
          path: "edit-book",
          element: <EditBook />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
