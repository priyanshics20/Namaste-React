import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
//Default import
import Header from "./components/Header";
import Error from "./components/Error";
//Named import
import { Title } from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";

const AppLayout = () => {
    return (
      <React.Fragment>
          <Header />
          <Outlet />
          {/* <Body /> */}
          <Footer />
      </React.Fragment>
    );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error /> ,
    children: [
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: "profile",
            element : <Profile />
          }
        ],
      },
      {
        path: '/contact',
        element:<Contact/>
      },
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);