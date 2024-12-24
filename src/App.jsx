import useDeviceDetect from "./hooks/useDeviceDetect";
import { Header, Mobile, Animation, Video, AboutSlider, Kit, AboutText, Team, Reviews } from "./components";

export default function App() {
  const { width } = useDeviceDetect();
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
            </div>
          </div>
        </>
      )}
    </div>
  );
}
