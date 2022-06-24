import './App.css';

import { Inputs } from './components/Inputs';
import { TopButtons } from './components/TopButtons';
import { TimeAndLocation } from './components/TimeAndLocation';
import { TemperatureAndDetails } from './components/TemperatureAndDetails';
import { Forecast } from './components/Forecast';
import { getFormattedWeatherData } from './services/WeatherService';
import React, { useEffect, useState } from 'react';

export function App() {

  const [query,setQuery] = useState({q:'berlin'})
  const [units,setUnits] = useState('metric')
  const [weather,setWeather] = useState(null)

  useEffect(()=>{
    const fetchWeather = async () =>{
      await getFormattedWeatherData({...query,units})
      .then(data=>{
        setWeather(data)
      })
    };
    fetchWeather();
  },[query,units])

 
 


  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700
        h-fit shadow-xl shadow-gray-400 rounded-[5px]'>
        <TopButtons/>
        <Inputs/>

        {weather && (
          <div>
            <TimeAndLocation/>
            <TemperatureAndDetails/>
            <Forecast/>
            <Forecast/>
          </div>
        )}
      </div>
    
    </>
    
  );
}

