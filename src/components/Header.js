import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus() ; 

const [btnNameReact , setBtnNameReact] = useState("Login")

console.log("Header rendered ");

useEffect(() => {
  console.log("UseEffect called ");
})


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
        <li><Link to ='/grocery'>Grocery</Link></li>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to = '/About'>About</Link></li>
          <li><Link to = '/Contact'>Contact Us</Link></li>
          <li><Link to = '/'>Cart</Link></li>
          <button onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") ;
          }}>{btnNameReact}</button>
          <li>Status : {onlineStatus ? "🟢" : "🔴" } </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
