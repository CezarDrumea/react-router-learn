import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/root";
import About from "./routes/about";
import Home from "./routes/home";
import NotFound from "./routes/not-found";
import Lessons, { lessonsLoader } from "./routes/lessons";
import LessonDetail, { lessonLoader } from "./routes/lesson";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "lessons",
        element: <Lessons />,
        loader: lessonsLoader,
      },
      {
        path: "lessons/:lessonId",
        element: <LessonDetail />,
        loader: lessonLoader,
      },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
