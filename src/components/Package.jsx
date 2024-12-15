import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { k1, k2, k3, k4, k5, k6, k7, k8, k9, k10 } from "../constants/images";
import "swiper/css";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Package = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container" style={{ borderBottom: "none" }}>
        <PrevButton swiperRef={swiperRef} />

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
        >
          <SwiperSlide>
            <img src={k1} alt="k1" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k2} alt="k2" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k3} alt="k3" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k4} alt="k4" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k5} alt="k5" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k6} alt="k6" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k7} alt="k7" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k8} alt="k8" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k9} alt="k9" className="package__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={k10} alt="k10" className="package__img" />
          </SwiperSlide>
        </Swiper>

        <NextButton swiperRef={swiperRef} />
      </div>
    </>
  );
};

export default Package;
