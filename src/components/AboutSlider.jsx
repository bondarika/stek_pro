import React, { useRef, useState } from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swiper_1, swiper_2 } from "../constants/images";
const AboutSlider = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container" style={{ borderBottom: "none" }}>
        <div className="about" id="about">
          <div className="line-left"></div>
          <div className="about-slider__header">
            <p>О ПРОЕКТЕ</p>
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <PrevButton swiperRef={swiperRef} />
            <div style={{ display: "grid", width: "100%" }}>
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
            </div>
            <NextButton swiperRef={swiperRef} />
          </div>
          <div className="line-right"></div>
        </div>
      </div>
    </>
  );
};

export default AboutSlider;
