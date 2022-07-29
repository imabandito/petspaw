import React from "react";
import "../styles/UserLog.css";
import like from "../images/graphics/like-color-30.svg";
import dislike from "../images/graphics/dislike-color-30.svg";
import favourites from "../images/graphics/fav-30.svg";

const UserLog = ({ reaction, key }) => {
  const reactionImgages = {
    Likes: like,
    Dislikes: dislike,
    Favourites: favourites,
  };

  return (
    <div className="user-log-container" key={key}>
      <div className="user-log-time">{reaction.time}</div>
      <div className="user-log-action">
        Image ID: <span>{reaction.id}</span> was added to {reaction.type}
      </div>
      <div className="user-log-reaction">
        <img src={reactionImgages[reaction.type]} alt={reaction.type} />
      </div>
    </div>
  );
};

export default UserLog;
