import React from "react";
import Card from "./Card";
import "../styles/CardList.css";
import { useState } from "react";

const CardList = ({ cardParams = {} }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="card-list">
      {cardParams.map((param) => (
        <Card
          {...param}
          key={param.id}
          onClick={() => setActive(param.id)}
          active={param.id === active ? active : false}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
