import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import HomePage from "./pages/home";
import Userpage from "./pages/userpage";
import SignIn from "./auth/sign-in";
import SignUp from "./auth/sign-up";

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
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
