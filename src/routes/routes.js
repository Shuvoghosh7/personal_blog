import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../Page/Dashboard/AddBlog";
import BlogList from "../Page/Dashboard/BlogList";
import About from "../Page/Main/About";
import Contact from "../Page/Main/Contact";
import Home from "../Page/Main/Home";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },      
        {
          path: "about",
          element: <About />,
        },      
        {
          path: "contact",
          element: <Contact />,
        },      
      ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <BlogList />,
          },
          {
            path: "add-blog",
            element: <AddBlog />,
          },
        ],
      },
  ]);

  export default routes;