import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu,setMenu]=useState(false)
 
  return (
    <>
      <div className={menu?"nav active" : "nav"}>
        <div className="logo">
          BDS
        </div>
        <div className="nav-menu">
          <FiMenu className="open-menu" onClick={()=>setMenu(true)}></FiMenu>
          <RxCross2 className="close-menu" onClick={()=>setMenu(false)}></RxCross2>
        </div>

        <ul className="nav-item-list"  >
          <li>Home</li>
          <li>Services</li>
          <li>Industries</li>
          <li>Careers</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
