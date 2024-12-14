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
        backgroundColor: "transparent",
        border: "none",
        marginRight: "20px",
      }}
      onClick={handlePrevSlide}
    >
      <img src={arrow_left} alt="prev_slide" />
    </button>
  );
};

export default PrevButton;
