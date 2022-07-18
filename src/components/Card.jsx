import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({
  title,
  backgroundColor = "#ffdd43",
  image,
  path,
  onClick,
  active,
}) => {
  const ref = React.createRef();

  return (
    <div
      className={active ? `card-container active` : `card-container`}
      ref={ref}
      onClick={onClick}
    >
      <Link to={path}>
        <div className="card-body" style={{ background: backgroundColor }}>
          <img src={image} alt={title} />
        </div>
        <div className="card-title">{title.toUpperCase()}</div>
      </Link>
    </div>
  );
};

export default Card;
