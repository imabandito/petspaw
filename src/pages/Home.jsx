import React from "react";
import "../styles/Home.css";
import image from "../images/girl-and-pet.svg";

const Home = () => {
  return (
    <div className="home-container">
      <img src={image} alt="girl-and-pet" />
      <div className="rectangle-container">
        <div className="rectangle"></div>
      </div>
    </div>
  );
};

export default Home;
