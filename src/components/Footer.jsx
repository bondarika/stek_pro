import { stek_pro, year } from "../constants/images";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="line-left"></div>
        <div className="footer__logo">
          <img src={stek_pro} alt="СТЕК_ПРО" />
          <img src={year} alt="2024" />
        </div>
        <div>
          <p>наши соцсети</p>
          <div className="footer__socials">
            <a href="https://vk.com/stekpro">вк</a>
            <a href="https://t.me/stek_pro">телеграм</a>
          </div>
        </div>
        <div>
          <p>по вопросам сотрудничества</p>
          <a href="mailto:stekprost@yandex.ru">stekprost@yandex.ru</a>
        </div>
        <div>
          <p>задизайнил</p>
          <a href="https://www.behance.net/bozhenkas">@bozhenkas</a>
        </div>
        <div className="line-right"></div>
      </div>
    </div>
  );
};

export default Footer;
