import React from "react";
import { arrow_left } from "../constants/images";

const PrevButton = ({ swiperRef }) => {
  const handlePrevSlide = () => {
    if (swiperRef?.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <button
      style={{
        position: "absolute",
        left: "-43px",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "none",
      }}
      onClick={handlePrevSlide}
    >
      <img src={arrow_left} alt="prev_slide" />
    </button>
  );
};

export default PrevButton;
