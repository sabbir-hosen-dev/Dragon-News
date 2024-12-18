import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Page/Home";
import MainPart from "../Components/Main/MainPart";
import ErrorPage from "../Page/ErrorPage";
import Login from "../Page/Login";
import SIgnUp from "../Page/SIgnUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/01" />
      },
      {
        path: "/category/:id",
        element: <MainPart />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        },
      },
    ],
  },
  {
    path :"/login",
    element: <Login />
  },
  {
    path :"/sign-up",
    element: <SIgnUp />
  },
  {
    path: "/about",
    element: <h2>About</h2>,
  },
  {
    path: "/career",
    element: <h1>Crearr</h1>,
  },
]);

export default router;
