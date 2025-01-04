import { child } from "../constants/images";
import Typewriter from "./Typewriter";

const Animation = () => {
  return (
    <>
      <div className="container">
        <div className="animation">
          <div className="line-left"></div>
          <div className="animation__typewriter">
            <div>
              <p>стек_про —</p>
            </div>
            <Typewriter
              texts={[
                "ваш путь в мир IoT",
                "инновационный набор",
                "онлайн курс на Stepik",
              ]}
            />
          </div>
          <div className="animation__img">
            <img src={child} alt="child" />
          </div>
          <div className="line-right"></div>
        </div>
      </div>
    </>
  );
};

export default Animation;
