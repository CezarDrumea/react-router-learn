import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/root";
// import NotFound from "./routes/not-found";
import About from "./routes/about";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "lessons",
      //   element: <Lessons />,
      //   loader: lessonsLoader,
      // },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
