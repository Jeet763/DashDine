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

// import biryani from "./photos/biryani.jpg";
// import dashdinelogo from "./photos/dashdinelogo.jpeg";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/" ,
    element:<AppLayout/>,
  },
  {
    path : "/About" ,
    element : <About/>,
  },
  {
    path:"/Contact",
    element:<ContactUs/>,
  }
]) ;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
