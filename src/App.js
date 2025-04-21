import React , {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import { createBrowserRouter, RouterProvider} from "react-router-dom";  //routing for v6.?.? 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; //for 7.5.?
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";
import { lazy, Suspense } from "react";

// import biryani from "./photos/biryani.jpg";
// import dashdinelogo from "./photos/dashdinelogo.jpeg";


const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", // This should be just "/" to match the base path of the parent route
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path:"/restaurant/:resId" ,
        element:<RestaurantMenu/> , 
      },
      {
        path:"/grocery" ,
        element:<Suspense fallback = {<h1>Loading...</h1>}><Grocery/></Suspense> , 
        // element = <Grocery/>,
      },
    ],
    errorElement: <Error />,
  },
]);

// const appRouter = createBrowserRouter([
//   {
//     path: "/" ,
//     element:<AppLayout/>,
//     children :
//      [ 

//       {
//       path : "/" ,
//       element :<Body/> ,
//     },
//     {
//       path : "/About" ,
//       element : <About/>,
//     },
//     {
//       path:"/Contact",
//       element:<ContactUs/>,
//     },
//      ]
//     errorElement:<Error/> ,
//   },
  
  
// ]) ;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
