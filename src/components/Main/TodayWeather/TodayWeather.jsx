import React from 'react';
import "./style.css"
import IMAGES from "../../../config/imagesImport";





const TodayWeather = (props) => {

  return (
    <div className="today-weather" >
      
      <div className="left-block">
        <div>
          <h2 className="city-name" >{props.weather.address} </h2>
          <p className="rain-probability" >Chance of rain: {props.weather.currentConditions.precipprob}% </p>
        </div>
        <h2 className="temperature" >
          {props.weather.days[0].temp}°
        </h2>
      </div>



      <div className="right-block">
        <div className="image-wrapper" style={ props.weather.days[0].icon == "clear-day" ? {"maxWidth": "140px"} : {"maxWidth": "300px"} } >
          <img src={IMAGES[props.weather.days[0].icon  ]} alt="" />
        </div>
      </div>
    </div>
  )
}

export default TodayWeather
