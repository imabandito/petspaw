import React from "react";
import Card from "./Card";
import "../styles/CardList.css";
import { useState } from "react";

const CardList = ({ cardParams = {}, active, setActive }) => {
  return (
    <div className="card-list">
      {cardParams.map((param) => (
        <Card
          {...param}
          key={param.id}
          onClick={() => setActive(param.id)}
          active={param.path === active ? active : false}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
