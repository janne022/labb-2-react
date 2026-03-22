import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import Root from "./routes/root";
import Home from "./routes/Home/Home";
import Portfolio from "./routes/Portfolio/Portfolio";
import { ThemeProvider } from "./theme-provider";
import CV from "./routes/CV/CV";
import About from "./routes/About/About";
import { ImageKitProvider } from "@imagekit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ImageKitProvider urlEndpoint="https://ik.imagekit.io/4mzgxtohp/">
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ImageKitProvider>
    </QueryClientProvider>
  </StrictMode>,
);
