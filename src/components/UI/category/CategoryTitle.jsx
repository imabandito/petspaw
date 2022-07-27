import React from "react";
import "./CategoryTitle.css";

const CategoryTitle = ({ title }) => {
  return <div className="category-title-container">{title.toUpperCase()}</div>;
};

export default CategoryTitle;
