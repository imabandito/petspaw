import React from "react";
import classes from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default SearchInput;
