import React from "react";
import "../styles/TopNav.css";
import SearchInput from "../components/UI/SearchInput";
import likeIcon from "../images/graphics/like-30.svg";
import dislikeIcon from "../images/graphics/dislike-30.svg";
import favIcon from "../images/graphics/fav-30.svg";
import likeIconActive from "../images/graphics/like-white-30.svg";
import dislikeIconActive from "../images/graphics/dislike-white-30.svg";
import favIconActive from "../images/graphics/fav-white-30.svg";

import NavBarIcon from "./UI/navbar-icon/NavBarIcon";
import { useState } from "react";

const TopNav = () => {
  const [active, setActive] = useState("");

  return (
    <div className="top-nav-container">
      <div className="search-menu">
        <SearchInput placeholder="Search for breeds by name" />
      </div>
      <NavBarIcon icon={likeIcon} activeIcon={likeIconActive} path="/likes" />
      <NavBarIcon
        icon={favIcon}
        activeIcon={favIconActive}
        path="/favourites"
      />
      <NavBarIcon
        icon={dislikeIcon}
        activeIcon={dislikeIconActive}
        path="/dislikes"
      />
    </div>
  );
};

export default TopNav;
