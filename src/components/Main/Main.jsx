import React from 'react';
import "./style.css"

import Search from './Search/Search';
import TodayWeather from './TodayWeather/TodayWeather';
import TodayForecast from './TodayForecast/TodayForecast';
import AirConditions from './AirConditions/AirConditions';

const Main = (props) => {
  return (
    <div className="main" >
      <Search
      
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      
        cities={props.cities}

        chosenCity={props.chosenCity}
        setChosenCity={props.setChosenCity}
      />
      
      { props.weather && <TodayWeather weather={props.weather}/>}

      { props.weather &&  <TodayForecast weather={props.weather}/> }

      {/* Here I NEED CONDITION LOADING  */}

      { props.weather && <AirConditions weather={props.weather} /> }
    </div>
  )
}

export default Main
