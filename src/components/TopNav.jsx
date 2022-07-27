import React from "react";
import "../styles/TopNav.css";
import SearchInput from "../components/UI/SearchInput";
import likeIcon from "../images/graphics/like-30.svg";
import NavBarIcon from "./UI/navbar-icon/NavBarIcon";

const TopNav = () => {
  return (
    <div className="top-nav-container">
      <div className="search-menu">
        <SearchInput placeholder="Search for breeds by name" />
      </div>
      <NavBarIcon icon={likeIcon} path="/likes" />
    </div>
  );
};

export default TopNav;
