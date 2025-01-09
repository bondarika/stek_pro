import { gosha, varya, artem, leonid, vlad } from "../constants/images";
const Team = () => {
  return (
    <div className="container">
      <div className="target-wrapper" id="team"></div>
      <div className="team">
        <div className="line-left"></div>
        <p className="team__header">КОМАНДА</p>
        <div className="team__block-line-1"></div>
        <div className="team__block" style={{ marginTop: "-60px" }}>
          <div className="team__block-info">
            <p className="team__block-name">Георгий Инкин</p>
            <p className="team__block-role" style={{ color: "#D65780" }}>
              pуководитель
            </p>
          </div>
          <img src={gosha} alt="gosha" />
        </div>

        <div className="team__block">
          <img src={varya} alt="varya" />
          <div className="team__block-info">
            <p className="team__block-name">Варвара Минеева</p>
            <p className="team__block-role">главный редактор</p>
          </div>
        </div>
        <div className="team__block">
          <div className="team__block-info">
            <p className="team__block-name">Артём Морачевский</p>
            <p className="team__block-role">технический специалист</p>
          </div>
          <img src={artem} alt="artem" />
        </div>
        <div className="team__block">
          <img src={vlad} alt="vlad" />
          <div className="team__block-info">
            <p className="team__block-name">Владислав Вахтель</p>
            <p className="team__block-role">тестировщик-методист</p>
          </div>
        </div>
        <div className="team__block" style={{ marginBottom: "60px" }}>
          <img src={leonid} alt="leonid" />
          <div className="team__block-info">
            <p className="team__block-name">Леонид Стецурин</p>
            <p className="team__block-role">креативный менеджер</p>
          </div>
        </div>
        <div className="team__block-line-2"></div>
        <div className="line-right"></div>
      </div>
    </div>
  );
};

export default Team;
