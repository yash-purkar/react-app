import React from "react";
import "./navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_branding">
        <div className="brand"></div>
        <div>Inventory Management System</div>
      </div>

      <div>
        <ul className="navigation_links">
          <li>Home</li>
        </ul>
      </div>
    </nav>
  );
};
