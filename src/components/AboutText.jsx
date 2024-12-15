import { logo_big, repka_logo, repka, vk } from "../constants/images";
const AboutText = () => {
  return (
    <>
      <div className="container">
      <div className="about__text">
        <div className="about__text-block">
          <p>
            СТЕК_ПРО — это инновационная IT-платформа для создания
            IoT‑устройств, ориентированная на интеграцию современных технологий
            и образовательных ресурсов. Она объединяет новейшие российские
            разработки и авторский онлайн-курс, предоставляя студентам
            и школьникам возможность исследовать и внедрять решения в области
            Интернета вещей.
          </p>
          <img src={logo_big} alt="logo" />
        </div>
        <div
          className="about__text-block"
          style={{ justifyContent: "flex-end" }}
        >
          <img src={repka_logo} alt="repka_logo" />
          <p>
            Наш образовательный проект построен на использовании отечественного
            микрокомпьютера Repka Pi, который превосходит Raspberry Pi
            по надёжности и производительности. Repka Pi — это сердце нашего
            обучения. Без неё СТЕК_ПРО не был бы возможен, а наши студенты
            не получили бы столь ценные знания и навыки в области IoT.
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
      </div>
      </div>
    </>
  );
};
export default AboutText;
