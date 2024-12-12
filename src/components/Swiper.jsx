import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { swiper_1, swiper_2 } from "../constants/images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/scss/components/swiper.scss";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src={swiper_1} alt="swiper_1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swiper_2} alt="swiper_2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swiper_1} alt="swiper_1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swiper_2} alt="swiper_2" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
