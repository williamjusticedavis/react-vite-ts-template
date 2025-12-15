import Layout from "@/components/common/Layout";
import AboutPage from "@/pages/About";
import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
