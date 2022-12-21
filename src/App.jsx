// import Router from "./router/router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/home";
import About from "./routes/about";
import { loader as nowPlayingLoader } from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: nowPlayingLoader,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
