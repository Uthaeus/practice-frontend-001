import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import HomePage from "./pages/home";
import Userpage from "./pages/userpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/userpage',
        element: <Userpage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
