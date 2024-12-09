import useDeviceDetect from "./hooks/useDeviceDetect";
import { Header, Mobile, Animation } from "./components";
import { video } from "./constants/images";

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
            {/* <div className="lines"> */}
            <Animation />
            <div className="video-container">
              <img src={video} alt="video" />
            </div>
            {/* </div> */}
          </div>
        </>
      )}
    </div>
  );
}
