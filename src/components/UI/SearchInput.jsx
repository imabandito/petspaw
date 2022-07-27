import React from "react";
import "./SearchInput.css";
import searchImg from "../../images/graphics/search.svg";

const SearchInput = (props) => {
  return (
    <div className="search-container">
      <div className="search-img"></div>
      {/* <img src={searchImg} className="search-img" /> */}
      <input {...props} className="search-input" />
    </div>
  );
};

export default SearchInput;
