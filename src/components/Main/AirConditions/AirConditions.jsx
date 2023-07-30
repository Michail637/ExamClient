import React from 'react';
import "./style.css";

const AirConditions = (props) => {
  return (
    <div className="air-conditions block" >
      <p className="subtitle" >Air Conditions</p>
      <div className="conditions-grid">
        <div className="item">
          <i className="fa-solid fa-temperature-half"></i>
          <div className="wrapper" >
            <p>Feels like</p>
            <div className="data"> {props.weather.currentConditions.feelslike}° </div>
          </div>          
        </div>

        <div className="item">
          <i className="fa-solid fa-wind"></i>
          <div  className="wrapper">
            <p>Wind</p>
            <div className="data"> {Math.round(props.weather.currentConditions.windspeed * 1.6, 2)} km/h </div>
          </div>          
        </div>

        <div className="item">
          <i className="fa-solid fa-droplet"></i>
          <div className="wrapper">
            <p>Chance of rain</p>
            <div className="data"> {props.weather.currentConditions.precipprob}% </div>
          </div>          
        </div>

        <div className="item">
          <i className="fa-solid fa-sun"></i>
          <div className="wrapper">
            <p>UV index</p>
            <div className="data"> {props.weather.currentConditions.uvindex} </div>
          </div>          
        </div>

      </div>
    </div>
  )
}

export default AirConditions
