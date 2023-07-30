import React from 'react';
import { useState, useEffect } from 'react';
import "./style.css";

const Search = (props) => {



  let [focused, setFocused] = useState(false);

  function setWeather(city) {
    props.setChosenCity(city);
    props.setSearchValue(city);
    setFocused(false);
  }


  useEffect( () => {
    function handleClickOutside(e) {
      if( !e.target.closest(".search-block") ) {
        setFocused(false)
      } 
    }
    document.addEventListener( "click", handleClickOutside )
    return () => {
      document.removeEventListener("click", handleClickOutside )
    }
  }, [] )

  

  return (
    <div className="search-block block"    >
      <input type="text" 
        value={props.searchValue} 
        onInput={ (e) => props.setSearchValue(e.target.value)  } 
        onFocus={ ()=> setFocused(true) }
      />

      <div className="options-block"  style={ (props.searchValue && focused )? {"display": "block"} : {"display": "none"} }  >  
        <h3> {(props.searchValue &&   !props.cities[0] && "Sorry, nothing is found") || "Suggested places" } </h3> 
        <ul className="options" >

        { props.cities.map( (city,index) => {
            return (
            <li className="city"  key={index} onClick={ () => setWeather(city.name) }   >
               <i className="fa-solid fa-location-dot"></i>
               <div value={city.name.toLowerCase()}>{city.name} { city.area ?`(${city.area})` : ""   } </div>
             </li>
            )
             
           } ) }

        </ul>
         
      </div>
    </div>
  )
}

export default Search
