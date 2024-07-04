import React from "react";
import "./Title.css";

const Title = ({ subTile, title }) => {
  return (
    <div className="title">
      <p>{subTile}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
