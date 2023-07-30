import React from 'react';
import "./style.css";
import IMAGES from "../../config/imagesImport";

const WeekForecast = (props) => {

  const today = new Date();
  const sevenDays = props.weather.days.slice(0,7);
  let days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];


  return (
    <div className="week-forecast block" >
      <p className="subtitle">
        7-day forecast
      </p>

      <div className="week">
    
        {sevenDays.map( (day, index)  => {
          return (
            <div className="week-item" key={index} style={ index == 6 ? {"borderBottom": "none"} : {"borderBottom": "1px solid rgb(54, 53, 53)"} } >
              <p>{ index == 0 ? "Today" :  days[ new Date(day.datetime).getDay() ]}</p>
              <div className="wrapper">
                <div className="image-wrapper" style={ day.icon == "clear-day" ? {"maxWidth": "40px"} : {"maxWidth": "80px"} }  >
                  <img src={ IMAGES[day.icon] } alt={day.icon} />
                </div>
                <p className="weather-condition">{day.conditions}</p>
              </div>
    
              <div className="min-max"  style={ {"textAlign": "right"} }>
                <span style={ {"color": "rgb(235, 234, 234)"} }  >{Math.round(day.tempmax)}</span>
                <span style={ {"color":"#9b9a9a" } }  >/{Math.round(day.tempmin)}</span>
              </div>
            </div>
          )
        } )}


      

      </div>
    </div>
  )
}

export default WeekForecast
