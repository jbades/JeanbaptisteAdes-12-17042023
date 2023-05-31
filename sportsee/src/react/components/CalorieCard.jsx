function CalorieCard ({dataValue, img, unit, name}) {
    return <div className="calorie-card__wrapper">
        <img  src={img} alt="" className="" />
        <div>{img}</div>
        <div className="calorie-card__subwrapper">
            <div className="calorie-card__value">{dataValue + unit}</div>
            <div className="calorie-card__name">{name}</div>
        </div>
    </div>
}

export default CalorieCard