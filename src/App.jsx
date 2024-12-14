import useDeviceDetect from "./hooks/useDeviceDetect";
import { Header, Mobile, Animation, Video, About} from "./components";

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
          </div>
        </>
      )}
    </div>
  );
}
