import React from 'react';
import { Link , useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    return (
    <nav>
            <div class="left">Olympics Around the World!</div>
            <div class="right texter-nav-other">
                <ul>
                    <li><Link className={`nav-link ${(location.pathname === "/")?"active":""}`} to="/">Home</Link></li>
                    <li><Link className={`nav-link ${(location.pathname === "/data")?"active":""}`} to="/data">Historical data and charts</Link></li>
                    <li><Link className={`nav-link ${(location.pathname === "/about")?"active":""}`} to="/about">About</Link></li>
                    <li><Link className={`nav-link ${(location.pathname === "/contact")?"active":""}`} to="/contact">Contact Us</Link></li>
                </ul>
            </div>
    </nav>
  )
}

export default Navbar;
