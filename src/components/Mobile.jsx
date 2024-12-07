import { logo } from "../constants/images";
const Mobile = () => {
  return (
    <div className="mobile">
      <img src={logo} alt="logo" />
      <p className="mobile__text">Мобильная версия сайта пока недоступна</p>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Mobile;
