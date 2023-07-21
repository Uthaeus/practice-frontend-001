import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "./store/user-context";

import RootLayout from "./components/layouts/root-layout";
import HomePage from "./pages/home";
import Userpage from "./pages/userpage";
import SignIn from "./auth/sign-in";
import SignUp from "./auth/sign-up";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Projects from "./pages/projects";
import Blogs from "./pages/blogs";
import Portfolio from "./pages/portfolio";


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
      }, 
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
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
        userCtx.login(data);
      })
      .catch(error => console.log('me error', error));
    }
  }, []);
  
  return <RouterProvider router={router} />;
}

export default App;
