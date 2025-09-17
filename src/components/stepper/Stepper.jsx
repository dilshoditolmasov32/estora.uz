import "./Stepper.css";
import oneStepIcon from "../../assets/images/oneStepIcon.svg";
import twoStepIcon from "../../assets/images/twoStepIcon.svg";
import threeStepIcon from "../../assets/images/threeStepIcon.svg";
import shartnomaLine from "../../assets/images/shartnomaLine.svg";
const Stepper = () => {
  return (
    <div className="stepper-component">
      <div className="stepper">
        <div className="step">
          <span className="active">
            <img src={oneStepIcon} alt="icon-1" />
          </span>
          <p> Asosiy ma'lumotlar</p>
        </div>
        <div className="step">
          <span>
            <img src={twoStepIcon} alt="icon-2" />
          </span>
          <p>Shartnoma tafsilotlari</p>
        </div>
        <div className="step">
          <span>
            <img src={threeStepIcon} alt="three icon" />
          </span>
          <p> Verifikatsiya</p>
        </div>
      </div>
      <img src={shartnomaLine} alt="line icon" id="lineIcon" />
    </div>
  );
};

export default Stepper;
