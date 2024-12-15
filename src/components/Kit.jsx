import React, { useRef, useState } from "react";
import { kit } from "../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { k1, k2, k3, k4, k5, k6, k7, k8, k9, k10 } from "../constants/images";
import "swiper/css";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
const Kit = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container" style={{ borderBottom: "none" }}>
        <div className="kit">
          <p className="kit__header">НАБОР</p>
          <div className="kit__main">
            <p>
              IoT-набор от IT проекта СТЕК_ПРО — это идеальное решение для
              практического освоения технологий Интернета вещей. В комплект
              входят высококачественные датчики, контроллеры и все необходимое
              для создания и тестирования IoT-проектов. Набор разработан для
              эффективного обучения и подходит как для начинающих, так и для
              опытных разработчиков. С его помощью вы сможете легко реализовать
              собственные идеи и проекты, а также глубже понять принципы работы
              умных устройств и систем. Воспользуйтесь этим набором для
              практических занятий и получите уникальный опыт в разработке и
              интеграции IoT решений.
            </p>
            <img src={kit} alt="kit" />
          </div>
          <p className="package__header">Комплектация:</p>
          <div
            style={{
              position: "relative",
            }}
          >
            <PrevButton swiperRef={swiperRef} />
            <div style={{ display: "grid", width: "100%" }}>
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
            </div>
            <NextButton swiperRef={swiperRef} />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "60px" }}></div>
    </>
  );
};

export default Kit;
