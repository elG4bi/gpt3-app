/* eslint-disable react/prop-types */
import "./cta.css";

const Cta = ({ subTitle, textFeature, btnText }) => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>{subTitle}</p>
        <h3>{textFeature}</h3>
      </div>
      <button className="gpt3__cta-button" type="button">
        {btnText}
      </button>
    </div>
  );
};

export default Cta;
