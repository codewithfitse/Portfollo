import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Login from "./page/Login";
import { Head } from "./page/Head";
import { Todo } from "./page/Todo";
import { Project } from "./page/Project";
import { RPS } from "./page/RPS";
import Movie from "./page/Movie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Service",
    element: <Service />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
  {
    path: "/Head",
    element: <Head />,
  },
  {
    path: "/Todo",
    element: <Todo />,
  },
  {
    path: "/RPS",
    element: <RPS />,
  },
  {
    path: "/Movie",
    element: <Movie />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
