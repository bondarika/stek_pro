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
          <Header />
          <div className="lines"></div>
          <Animation />
          <div className="video"><img src={video} alt="video" /></div>
        </>
      )}
    </div>
  );
}
