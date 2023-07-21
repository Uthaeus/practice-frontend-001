import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "./store/user-context";

import ErrorPage from "./components/error/Error";
import RootLayout from "./components/layouts/root-layout";
import HomePage from "./pages/home";
import Userpage from "./pages/userpage";
import SignIn from "./auth/sign-in";
import SignUp from "./auth/sign-up";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Projects from "./pages/projects";
import Blogs from "./pages/blogs";
import BlogLayout from "./components/layouts/blog-layout";
import NewBlog from "./components/blogs/new-blog";
import BlogDetail from "./components/blogs/blog-detail";
import EditBlog from "./components/blogs/edit-blog";
import Topics from "./components/topics/topics";
import TopicDetail from "./components/topics/topic-detail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
    ]
  },
  {
    path: '/blogs',
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Blogs />
      },
      {
        path: '/blogs/new',
        element: <NewBlog />
      },
      {
        path: '/blogs/:id',
        element: <BlogDetail />
      },
      {
        path: '/blogs/:id/edit',
        element: <EditBlog />
      },
    ]
  },
  {
    path: '/topics',
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Topics />
      },
      {
        path: '/topics/:id',
        element: <TopicDetail />
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
