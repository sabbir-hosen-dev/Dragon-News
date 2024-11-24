import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";
import { AuthContexProvider } from "./Context/AuthContex";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContexProvider>
      <RouterProvider router={router} />
    </AuthContexProvider>
  </StrictMode>
);
