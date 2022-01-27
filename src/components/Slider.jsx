import React from "react";
import { useInView } from "react-intersection-observer";
const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div
      ref={ref}
      className={`slider ${flipped && "reverse"} ${inView && "slider-zoom"}`}
    >
      <img
        width={"200px"}
        height={"500px"}
        src={imageSrc}
        className="slider-image"
        alt="StackOS"
      />
      <div className="slider-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Slider;
