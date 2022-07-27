import React from "react";
import "../styles/VotingTools.css";

import likeIconActive from "../images/graphics/like-white-30.svg";
import dislikeIconActive from "../images/graphics/dislike-white-30.svg";
import favIconActive from "../images/graphics/fav-white-30.svg";

const VotingTools = () => {
  return (
    <div className="voting-tools-container">
      <button className="btn-like voting-btn">
        <img src={likeIconActive} alt="like" />
      </button>
      <button className="btn-favourite voting-btn">
        <img src={favIconActive} alt="favourite" />
      </button>
      <button className="btn-dislike voting-btn">
        <img src={dislikeIconActive} alt="dislike" />
      </button>
    </div>
  );
};

export default VotingTools;
