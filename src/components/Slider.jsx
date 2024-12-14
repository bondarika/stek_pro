import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiper_1, swiper_2 } from "../constants/images";
import "swiper/css";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Slider = () => {
  const swiperRef = useRef();
  return (
    <>
      <PrevButton swiperRef={swiperRef} />

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={2}
        spaceBetween={9}
        loop={true}
        style={{
          width: "100%",
          height: "min-content",
          gridColumn: "2",
          gridRow: "5",
          minWidth: "916px",
          borderRadius: "8px",
        }}
      >
        <SwiperSlide>
          <img
            src={swiper_1}
            alt="swiper_1"
            style={{
              width: "100%",
              minWidth: "454px",
              borderRadius: "8px",
              border: "1px solid #696969",
              boxSizing: "border-box",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiper_2}
            alt="swiper_2"
            style={{
              width: "100%",
              minWidth: "454px",
              borderRadius: "8px",
              border: "1px solid #696969",
              boxSizing: "border-box",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiper_1}
            alt="swiper_1"
            style={{
              width: "100%",
              minWidth: "454px",
              borderRadius: "8px",
              border: "1px solid #696969",
              boxSizing: "border-box",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={swiper_2}
            alt="swiper_2"
            style={{
              width: "100%",
              minWidth: "454px",
              borderRadius: "8px",
              border: "1px solid #696969",
              boxSizing: "border-box",
            }}
          />
        </SwiperSlide>
      </Swiper>

      <NextButton swiperRef={swiperRef} />
    </>
  );
};

export default Slider;
