import { React, useRef } from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviews = () => {
  const swiperRef = useRef();
  return (
    <div className="container">
      <div className="target-wrapper" id="reviews"></div>
      <div className="reviews">
        <div className="line-left"></div>
        <p className="reviews__header">ОТЗЫВЫ</p>
        <div style={{ position: "relative" }}>
          <PrevButton swiperRef={swiperRef} />
          <div style={{ display: "grid", width: "100%" }}>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
            >
              <SwiperSlide>
                <div className="reviews__review">
                  <div className="display: 'flex', gap: '10px'">
                    <p className="reviews__name">Леонид Стецурин</p>
                    <p className="reviews__role">студент СПБГУТ</p>
                  </div>

                  <p className="reviews__text">
                    Набор СТЕК_ПРО превзошёл все мои ожидания! Я начинал с нуля
                    в области интернета вещей и смарт-устройств, и благодаря
                    этому курсу я смог быстро освоить основные принципы
                    и приступить к практическим проектам. Приятно, что в основе
                    лежит российский микрокомпьютер, что делает обучение
                    ещё более актуальным и доступным. Отличный старт для всех,
                    кто хочет погрузиться в мир IoT!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviews__review">
                  <div className="display: 'flex', gap: '10px'">
                    <p className="reviews__name">Игорь Безликов</p>
                    <p className="reviews__role">не студент</p>
                  </div>

                  <p className="reviews__text">
                    Обучение с помощью СТЕК_ПРО оказалось невероятно интересным
                    и полезным. Набор идеально подходит для начинающих, потому
                    что материал изложен очень понятно, а задания позволяют
                    сразу применять полученные знания на практике. Курс дал мне
                    не только теоретические знания, но и практические навыки
                    в разработке умных устройств. Отдельно хочу отметить
                    качество комплектующих и удобство работы с российским
                    микрокомпьютером.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviews__review">
                  <div className="display: 'flex', gap: '10px'">
                    <p className="reviews__name">Леонид Стецурин</p>
                    <p className="reviews__role">студент СПБГУТ</p>
                  </div>

                  <p className="reviews__text">
                    Набор СТЕК_ПРО превзошёл все мои ожидания! Я начинал с нуля
                    в области интернета вещей и смарт-устройств, и благодаря
                    этому курсу я смог быстро освоить основные принципы
                    и приступить к практическим проектам. Приятно, что в основе
                    лежит российский микрокомпьютер, что делает обучение
                    ещё более актуальным и доступным. Отличный старт для всех,
                    кто хочет погрузиться в мир IoT!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviews__review">
                  <div className="display: 'flex', gap: '10px'">
                    <p className="reviews__name">Игорь Безликов</p>
                    <p className="reviews__role">не студент</p>
                  </div>

                  <p className="reviews__text">
                    Обучение с помощью СТЕК_ПРО оказалось невероятно интересным
                    и полезным. Набор идеально подходит для начинающих, потому
                    что материал изложен очень понятно, а задания позволяют
                    сразу применять полученные знания на практике. Курс дал мне
                    не только теоретические знания, но и практические навыки
                    в разработке умных устройств. Отдельно хочу отметить
                    качество комплектующих и удобство работы с российским
                    микрокомпьютером.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <NextButton swiperRef={swiperRef} />
        </div>
        <div style={{ height: "60px" }}></div>
        <div className="line-right"></div>
      </div>
    </div>
  );
};

export default Reviews;
