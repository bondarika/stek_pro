import { child, h1 } from "../constants/images";

const Animation = () => {
  return (
    <>
      <div className="container">
        <div className="animation">
          <div className="animation__img-1">
            <img src={h1} alt="h1" />
          </div>
          <div className="animation__img-2">
            <img src={child} alt="child" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
