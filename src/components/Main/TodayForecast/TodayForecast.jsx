import React from 'react';
import "./style.css";
import IMAGES from "../../../config/imagesImport";

const TodayForecast = (props) => {
  return (
    <div className="today-forecast block" >
      <p className="subtitle" >Today's forecast</p>
      <div className="weather-by-time">


        { props.weather.days[0].hours.map( (date, index) => {
          if( index >= 6 && index % 3 == 0 ) {
            return (
              <div className="item" key={index} style={ index == 21 ? {"borderRight":"none"} : {"borderRight": "2px solid rgb(96 96 96)"} } >
                <p className="time">{date.datetime}</p>
                <div className="image-wrapper">
                  <img src={IMAGES[date.icon]} alt="" />
                </div>
                <div className="temp">{date.temp}°</div>
              </div>
            )
          }
        } ) }
      </div>
    </div>
  )
}

export default TodayForecast
