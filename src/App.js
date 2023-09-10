import React, { lazy , Suspense, useState} from "react";
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
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


// import Instamart from "./components/Instamart";

// we will do chunking of our code
//this is chunking or dynamic import
// this become different bundle all together so it takes time to load script so meanwhile react tries to suspend it as it is not  initiall therey so it throws error

// this import is not normal import it is a promise 
const Instamart = lazy(() => import("./components/Instamart"));
// upon on demand loading -> upon render => suspend loading
// to handle this we use suspense so we wrap inside suspense

// never try to dynamic load component inside another component

const AppLayout = () => {

  // never do this (inside component dynamic loading )
  // coz after every render it reload again make website slower 
  // const Instamart = lazy(() => import("./components/Instamart"));
  
  // const [user, setUser] = useState({
  //   name: "Priyanshi Agrawal",
  //   email: "apriyanshi637@gmail.com"
  // })
  
  return (
    <React.Fragment> 
      <Provider store={store}>
          <Header />
          <Outlet />
          {/* <Body /> */}
          <Footer />  
        </Provider>
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
      },
      {
        path: '/instamart',
        element: (
          // this fallback is a prop which here we can show anything until our main component is loaded 
          <Suspense fallback={ <Shimmer /> }>
            <Instamart /> 
          </Suspense>
        ), 
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);