import React from "react";
import { Link } from "react-router-dom";
import "./NavBarIcon.css";

const NavBarIcon = ({ icon, activeIcon, path }) => {
  return (
    <Link to={path}>
      <div className="navbar-icon">
        <img src={icon} />
      </div>
    </Link>
  );
};

export default NavBarIcon;
