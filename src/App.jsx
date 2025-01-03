import useDeviceDetect from "./hooks/useDeviceDetect";
import {
  Header,
  Mobile,
  Animation,
  Video,
  AboutSlider,
  Kit,
  AboutText,
  Team,
  Reviews,
  Partners,
  Typewriter
} from "./components";


export default function App() {
  const { width } = useDeviceDetect();
    const textArray = [
      "ваш путь в мир IoT",
      "инновационный набор",
      "онлайн курс на Stepik",
    ];
    const period = 2000;
  return (
    <div>
      {width < 1080 ? (
        <Mobile />
      ) : (
        <>
          <div className="page-layout">
            <Header />
            <div style={{ width: "100%", position: "relative" }}>
              <Animation />
              <Video />
              <AboutSlider />
              <AboutText />
              <Kit />
              <Team />
              <Reviews />
              <Partners />
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <p>Оставьте свои данные, мы свяжемся с вами</p>
                <Typewriter toRotate={textArray} period={period} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
