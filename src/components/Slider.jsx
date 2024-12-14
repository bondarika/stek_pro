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
      >
        <SwiperSlide>
          <img src={swiper_1} alt="swiper_1" className="about__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_2} alt="swiper_2" className="about__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_1} alt="swiper_3" className="about__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_2} alt="swiper_4" className="about__img" />
        </SwiperSlide>
      </Swiper>

      <NextButton swiperRef={swiperRef} />
    </>
  );
};

export default Slider;
