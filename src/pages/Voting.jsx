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

const Voting = () => {
  const [cat, setCat] = useState([{}]);
  const [fetchCat, isLoading, catError] = useFetching(async () => {
    const res = await CatService.getRandom();
    console.log(res);
    setCat(res.data);
  });

  useEffect(() => {
    fetchCat();
  }, []);

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
        {console.log(cat)}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="voting-image-tools">
            <div className="voting-image-container">
              <img src={cat[0].url} alt="" />
            </div>
            <VotingTools />
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;
