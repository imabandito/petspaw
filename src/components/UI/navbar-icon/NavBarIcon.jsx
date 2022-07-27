import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBarIcon.css";

const NavBarIcon = ({
  icon,
  activeIcon,
  path,
  active,
  setActive,
  hovered = false,
}) => {
  const location = useLocation();
  return (
    <Link to={path} onClick={setActive}>
      <div
        className={
          location.pathname === path
            ? `navbar-icon active ${hovered && ` hovered`}`
            : `navbar-icon ${hovered && ` hovered`}`
        }
      >
        <img src={icon} className="icon" />
        <img src={activeIcon} className="icon-active" />
      </div>
    </Link>
  );
};

export default NavBarIcon;
