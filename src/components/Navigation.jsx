import "../styles/Navigation.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import CardList from "./CardList";
import Card from "./Card";
import catImg from "../images/pet-breeds.png";
import voteImg from "../images/vote-table.png";
import searchImg from "../images/images-search.png";
import { useEffect, useState } from "react";

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

  const [active, setActive] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className="nav-container">
      <header>
        <Link to="/" onClick={() => setActive("/")}>
          <img src={logo} alt="logo" />
        </Link>
      </header>
      <div className="nav-content">
        <div className="nav-info">
          <h1>Hello there!</h1>
          <h5>Meowww and enjoy</h5>
        </div>
        <div className="nav-pick">
          <h4>Lets start using The Cat API</h4>
          <CardList cardParams={cards} active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
