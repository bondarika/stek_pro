import React from "react";
import { kit } from "../constants/images";
import Package from "./Package";
const Kit = () => {
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
        </div>
      </div>
      <Package />
      <div className="container" style={{ marginTop: "60px" }}></div>
    </>
  );
};

export default Kit;
