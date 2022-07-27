import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Voting from "./Voting";
import Breeds from "./Breeds";
import Gallery from "./Gallery";
import Navigation from "../components/Navigation";
import TopNav from "../components/TopNav";
import Likes from "./Likes";
import "../styles/MainContent.css";

const MainContent = (props) => {
  return (
    <div className="main-content">
      <TopNav />
      {props.children}
    </div>
  );
};

export default MainContent;
