import React from "react";
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
import RestaurantMenu from "./components/restaurantMenu.js";

// import biryani from "./photos/biryani.jpg";
// import dashdinelogo from "./photos/dashdinelogo.jpeg";

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
        path:"/restaurants/:resId" ,
        element:<RestaurantMenu/> , 
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
