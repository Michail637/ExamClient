import './App.css';
import { useState, useEffect } from 'react';

import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import WeekForecast from './components/WeekForecast/WeekForecast';

import configData from "./config/config.json";

import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';


function App() {

  let [searchValue, setSearchValue] = useState("Odessa");  { /* search city */ }
  let [cities, setCities] = useState([]);

  let [chosenCity, setChosenCity] = useState("Odessa");   { /* search weather by city */ }
  let [weather, setWeather] = useState(null);

  let [loading, setLoading] = useState( false );
  let [error, setError] = useState(false);

  useEffect( () => {
    setError(false)
    if( !searchValue.trim() ) {
      return;
    }
    const URL = `${configData.CITIES_URL}`.replace("PARAM", searchValue);
    fetch( URL)
    .then( res => res.json() )
    .then( data => setCities(data) )
    .catch( (err) => {
      console.error(err);
      setLoading(false);
      setError(true)
    } )

  }, [searchValue.trim()] );


  useEffect( () => {
    setLoading(true);
    setError(false);
      if( !chosenCity ) {
        return;
      }else {
          const URL = configData.WEATHER_URL.replace("PARAM", chosenCity);
          fetch(URL)
          .then( data => data.json() )
          .then( weather =>{ setWeather(weather); setLoading(false) })
          .catch( (error) => {
            console.log(error);
            setLoading(false);
            setError(true);
          } )
       
      }
   

  }, [chosenCity.trim()] );


  if( error ) {
    return(
      <div className="App">
      <div className="container">
       <Menu/>
       <Error/>
      </div>
     </div>
    )
  }


  return (
    <div className="App">
     <div className="container">
      <Menu/>
      { loading ? ( <Loading/> ) : (
        <>
        <Main
        searchValue={searchValue}
        setSearchValue={setSearchValue}

        cities={cities}

        chosenCity={chosenCity}
        setChosenCity={setChosenCity}

        weather={weather}
        setWeather={setWeather}
        />

        { weather && <WeekForecast weather={weather}/> }
        </>
      ) }

      {error ? (<Error/>) : "" }
     
     </div>
    </div>
  );
}

export default App;

