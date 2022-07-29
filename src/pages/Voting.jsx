import Search from "antd/lib/transfer/search";
import React from "react";
import TopNav from "../components/TopNav";
import SearchInput from "../components/UI/SearchInput";
import CatService from "../API/CatService";
import { useFetching } from "../hooks/useFetching";
import "../styles/Voting.css";
import { useEffect, useState } from "react";
import NavBarIcon from "../components/UI/navbar-icon/NavBarIcon";
import backIcon from "../images/graphics/back-20.svg";
import backIconActive from "../images/graphics/back-white-20.svg";
import CategoryTitle from "../components/UI/category/CategoryTitle";
import VotingTools from "../components/VotingTools";
import UserLogs from "../components/UserLogs";

const Voting = () => {
  const [cat, setCat] = useState([{}]);
  const [fetchCat, isLoading, catError] = useFetching(async () => {
    const res = await CatService.getRandom();
    setCat(res.data);
  });
  const [reactions, setReactions] = useState([]);

  useEffect(() => {
    fetchCat();
  }, [reactions]);

  const addReaction = (e) => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    const classes = e.target.classList;

    if (classes.contains("btn-like")) {
      setReactions([
        { id: cat[0].id, type: "Likes", time: time },
        ...reactions,
      ]);
    } else if (classes.contains("btn-dislike")) {
      setReactions([
        { id: cat[0].id, type: "Dislikes", time: time },
        ...reactions,
      ]);
    } else if (classes.contains("btn-favourite")) {
      setReactions([
        { id: cat[0].id, type: "Favourites", time: time },
        ...reactions,
      ]);
    }
  };

  return (
    <div className="voting-container">
      <div className="voting-menu">
        <NavBarIcon
          path="/"
          icon={backIcon}
          activeIcon={backIconActive}
          hovered={true}
        />
        <CategoryTitle title="Voting" />
      </div>
      {catError && <h1>Error {catError}</h1>}
      <div className="voting-image">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="voting-image-tools">
            <div className="voting-image-container">
              <img src={cat[0].url} alt="" />
            </div>
            <VotingTools handler={addReaction} />
          </div>
        )}
        <UserLogs reactions={reactions} />
      </div>
    </div>
  );
};

export default Voting;
