import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { UserContext } from "./store/user-context";

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
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem('practice-token');

    if (token && !userCtx.user) {
      fetch('http://localhost:4000/user_check', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then(data => {
        console.log('me data', data.data);
        userCtx.login(data.data);
      })
      .catch(error => console.log('me error', error));
    }
  }, []);
  
  return <RouterProvider router={router} />;
}

export default App;
