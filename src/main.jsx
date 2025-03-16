import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Home,
  About,
  Contact,
  Work,
  Capabilities,
  ProjectDetail,
} from "./pages/pages.index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/work/:projectName",
        element: <ProjectDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/capabilities",
        element: <Capabilities />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
