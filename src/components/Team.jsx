import { gosha } from "../constants/images";
const Team = () => {
  return (
    <div className="container">
      <div className="team">
        <div className="line-left"></div>
        <p className="team__header">КОМАНДА</p>
        <div className="team__block">
          <div>
            <p className="team__block-name">Георгий Инкин</p>
            <p className="team__block-role" style={{ color: "#D65780" }}>
              pуководитель
            </p>
          </div>

          <img src={gosha} alt="gosha" />
        </div>
        <div className="line-right"></div>
      </div>
    </div>
  );
};

export default Team;
