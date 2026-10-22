import { createBrowserRouter } from "react-router-dom";
/* pages */
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
