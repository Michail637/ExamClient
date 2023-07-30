import React from 'react';
import "./style.css";


const Menu = () => {
  return (
    <ul className="menu block" >
      <li className="icon-wrapper active">
        <i className="fa-solid fa-wind"></i>
      </li>

      <li className="icon-wrapper">
        <i className="fa-solid fa-cloud-sun"></i>      
        <span>Weather</span>
      </li>

      <li className="icon-wrapper">
        <i className="fa-solid fa-list-ul"></i> 
        <span>Cities</span>
      </li>

      <li className="icon-wrapper">
        <i className="fa-solid fa-map"></i>
        <span>Map</span>
      </li>

      <li className="icon-wrapper">
        <i className="fa-solid fa-sliders"></i>
        <span>Settings</span>
      </li>

    </ul>
  )
}

export default Menu
