import Search from "antd/lib/transfer/search";
import React from "react";
import SearchInput from "../components/UI/SearchInput";

const Voting = () => {
  return (
    <div>
      <div className="search-menu">
        <SearchInput placeholder="Search for breeds by name" />
      </div>
    </div>
  );
};

export default Voting;
