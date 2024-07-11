import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
   return (
       <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <li>Home</li>
                </Link>
                <div className="menu-icon">

                </div>
            </div>
       </nav>
   );
}