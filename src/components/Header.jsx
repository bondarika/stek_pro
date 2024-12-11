import { logo } from "../constants/images";
const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <p className="header__logo-text">СТЕК-ПРО</p>
          </div>
          <div className="header__nav">
            <p>О ПРОЕКТЕ</p>
            <p>НАБОР</p>
            <p>КОМАНДА</p>
            <p>ОТЗЫВЫ</p>
            <p>ПАРТНЁРЫ</p>
          </div>
          <div className="header__lang">
            <p>RU</p>
            <p>EN</p>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
