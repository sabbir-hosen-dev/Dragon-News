import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <h2>About</h2>
  },
  {
    path: "/career",
    element: <h1>Crearr</h1>
  }
])

export default router