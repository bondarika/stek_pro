import { logo } from "../constants/images";
import { useRef } from "react";

const Header = () => {
  const menuRef = useRef();
  return (
    <>
      <div
        className="container"
        style={{
          position: "-webkit-sticky",
          backgroundColor: "#fffbff",
          zIndex: "100",
          top: "0",
        }}
      >
        <header className="header">
          <button
            className="header__logo"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={logo} alt="logo" />
            <p className="header__logo-text">СТЕК-ПРО</p>
          </button>
          <div className="header__nav">
            <button
              ref={menuRef}
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              О ПРОЕКТЕ
            </button>
            <button
              ref={menuRef}
              onClick={() => {
                const element = document.getElementById("kit");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              НАБОР
            </button>
            <button
              ref={menuRef}
              onClick={() => {
                const element = document.getElementById("team");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              КОМАНДА
            </button>
            <button
              ref={menuRef}
              onClick={() => {
                const element = document.getElementById("reviews");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              ОТЗЫВЫ
            </button>
            <button
              ref={menuRef}
              onClick={() => {
                const element = document.getElementById("partners");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              ПАРТНЁРЫ
            </button>
          </div>
          <div className="header__lang">
            <p>RU</p>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
