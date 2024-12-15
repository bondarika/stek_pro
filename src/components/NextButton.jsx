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
        position: "absolute",
        right: "-43px",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "none",
        marginLeft: "20px",
      }}
      onClick={handleNextSlide}
    >
      <img src={arrow_right} alt="next_slide" />
    </button>
  );
};

export default NextButton;
