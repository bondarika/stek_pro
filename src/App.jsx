import useDeviceDetect from "./hooks/useDeviceDetect";
import { Header, Mobile, Animation, Video, About, Kit } from "./components";


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
            <Animation />
            <Video />
            <About />
            <Kit />
          </div>
        </>
      )}
    </div>
  );
}
