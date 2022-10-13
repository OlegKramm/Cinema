import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.module.css";

const Nav = () => {
    return(
        <nav>
            <NavLink to = "/home">Home</NavLink>
            <NavLink to = "/teacher">Our Teacher</NavLink>
            <NavLink to = "/tutorials">Kiz tutorials</NavLink>
            <NavLink to = "/free">Free classes</NavLink>
            <NavLink to = "/contact">Contact us</NavLink>
           
        </nav>
    )
}
export default Nav;