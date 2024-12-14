import React from "react";
import { arrow_right } from "../constants/images";

const NextButton = ({ swiperRef }) => {
  const handleNextSlide = () => {
    if (swiperRef?.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        padding: "0px 0px 0px 20px",
        width: "fit-content",
        height: "fit-content",
        alignSelf: "center",
      }}
      onClick={handleNextSlide}
    >
      <img src={arrow_right} alt="next_slide" />
    </button>
  );
};

export default NextButton;
