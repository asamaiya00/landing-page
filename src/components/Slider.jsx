import React from "react";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  return (
    <div className={`slider ${flipped && "reverse"}`}>
      <img
        width={"200px"}
        height={"500px"}
        src={imageSrc}
        className="slider-image"
      />
      <div className="slider-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Slider;
