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
        padding: "0px 20px 0px 0px",
        width: "fit-content",
        height: "fit-content",
        alignSelf: "center",
        justifySelf:"flex-end"
      }}
      onClick={handlePrevSlide}
    >
      <img src={arrow_left} alt="prev_slide" />
    </button>
  );
};

export default PrevButton;
