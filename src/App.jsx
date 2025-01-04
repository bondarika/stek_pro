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
  Footer,
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
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
