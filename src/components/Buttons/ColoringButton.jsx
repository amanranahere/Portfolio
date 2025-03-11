import React from "react";
import { useNavigate } from "react-router-dom";

const ColoringButton = ({ text, link, type }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(link)} className="">
      <div className="container">
        <div className={`button-home type--${type}`}>
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">{text}</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </div>
      </div>
    </button>
  );
};

export default ColoringButton;
