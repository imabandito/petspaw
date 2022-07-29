import React from "react";
import "../styles/UserLogs.css";
import UserLog from "./UserLog";

const UserLogs = ({ reactions }) => {
  return (
    <div className="user-logs-container">
      {reactions.map((reaction) => (
        <UserLog reaction={reaction} key={reaction.id} />
      ))}
    </div>
  );
};

export default UserLogs;
