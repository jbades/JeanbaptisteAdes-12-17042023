// import calorieCount from "../../../assets/calories-icon.svg"

function CalorieCard({ dataValue, image, unit, name }) {
    return (
      <div className="calorie-card__wrapper">
        <img src={image} alt="" className="" />
        <div>{image}</div>
        <div className="calorie-card__subwrapper">
          <div className="calorie-card__value">
            {dataValue + unit}
          </div>
          <div className="calorie-card__name">{name}</div>
        </div>
      </div>
    );
  }
  
  export default CalorieCard;
  