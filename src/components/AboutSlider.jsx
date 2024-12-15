import React, { useRef, useState } from "react";
import { logo_big, repka_logo, repka, vk } from "../constants/images";
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
        <div className="about">
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
        </div>
      </div>
    </>
  );
};

export default AboutSlider;

{
  /* <div className="about__text">
            <div className="about__text-block">
              <p>
                СТЕК_ПРО — это инновационная IT-платформа для создания
                IoT‑устройств, ориентированная на интеграцию современных
                технологий и образовательных ресурсов. Она объединяет новейшие
                российские разработки и авторский онлайн-курс, предоставляя
                студентам и школьникам возможность исследовать и внедрять
                решения в области Интернета вещей.
              </p>
              <img src={logo_big} alt="logo" />
            </div>
            <div
              className="about__text-block"
              style={{ justifyContent: "flex-end" }}
            >
              <img src={repka_logo} alt="repka_logo" />
              <p>
                Наш образовательный проект построен на использовании
                отечественного микрокомпьютера Repka Pi, который превосходит
                Raspberry Pi по надёжности и производительности. Repka Pi —
                это сердце нашего обучения. Без неё СТЕК_ПРО не был бы возможен,
                а наши студенты не получили бы столь ценные знания и навыки
                в области IoT.
              </p>
            </div>

            <div className="about__text-repka">
              <img src={repka} alt="repka" />
            </div>
            <a
              href="https://vk.com/stekpro"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid #696969",
                height: "fit-content",
                minWidth: "916px",
                borderRadius: "4px",
                margin: "auto",
                marginBottom: "60px",
                padding: "12px 0px 12px 20px",
                textDecoration: "none",
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontFamily: "Coolvetica",
                  fontSize: "24px",
                  width: "auto",
                }}
              >
                присоединяйтесь к нашему сообществу и будьте в курсе новостей из
                мира IoT!
              </p>

              <img src={vk} alt="vk" style={{ marginRight: "20px" }} />
            </a>
          </div> */
}
