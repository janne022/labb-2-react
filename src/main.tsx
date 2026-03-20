import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import Root from "./routes/root";
import Home from "./routes/Home/Home";
import Portfolio from "./routes/Portfolio/Portfolio";
import { ThemeProvider } from "./theme-provider";
import CV from "./routes/CV/CV";
import About from "./routes/About/About";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/cv",
        element: <CV />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
