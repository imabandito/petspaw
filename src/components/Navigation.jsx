import "../styles/Navigation.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import CardList from "./CardList";
import Card from "./Card";
import catImg from "../images/pet-breeds.png";
import voteImg from "../images/vote-table.png";
import searchImg from "../images/images-search.png";
import { useState } from "react";

const Navigation = () => {
  const [cards, setCards] = useState([
    {
      title: "Voting",
      path: "/voting",
      image: voteImg,
      backgroundColor: "#B4B7FF",
      id: 1,
    },
    {
      title: "Breeds",
      path: "/breeds",
      image: catImg,
      backgroundColor: "#97EAB9",
      id: 2,
    },
    {
      title: "Gallery",
      path: "/gallery",
      image: searchImg,
      id: 3,
    },
  ]);

  return (
    <div className="nav-container">
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
      <div className="nav-content">
        <div className="nav-info">
          <h1>Hi intern!</h1>
          <h5>Welcome to MI 2022 Front-end test</h5>
        </div>
        <div className="nav-pick">
          <h4>Lets start using The Cat API</h4>
          <CardList cardParams={cards} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
