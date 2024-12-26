import {
  repka_partner,
  trim,
  sut,
  math123,
  fractalclub,
} from "../constants/images";
const Partners = () => {
  return (
    <div className="container">
      <div className="partners">
        <div className="line-left"></div>
        <p className="partners__header">НАШИ ПАРТНЕРЫ</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
          }}
        >
          <a href="https://repka-pi.ru/" className="partners__box">
            <img src={repka_partner} alt="repka" />
          </a>
          <a href="https://trim.ru/" className="partners__box">
            <img src={trim} alt="trim" />
          </a>
          <a href="https://math123.ru/" className="partners__box">
            <img src={math123} alt="math123" style={{ padding: "20px" }} />
          </a>
          <a href="https://sut.ru/" className="partners__box">
            <img src={sut} alt="sut" />
          </a>
          <a href="https://fractalclub.ru/" className="partners__box">
            <img
              src={fractalclub}
              alt="fractalclub"
              style={{ padding: "20px" }}
            />
          </a>
        </div>
        <div style={{ height: "60px" }}></div>
        <div className="line-right"></div>
      </div>
    </div>
  );
};
export default Partners;
