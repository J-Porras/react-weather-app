import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inputs } from './components/Inputs';
import { TopButtons } from './components/TopButtons';
import { TimeAndLocation } from './components/TimeAndLocation';
import { TemperatureAndDetails } from './components/TemperatureAndDetails';
import { Forecast } from './components/Forecast';
import { getFormattedWeatherData } from './services/WeatherService';
import React, { useEffect, useState } from 'react';

export function App() {

  const [query,setQuery] = useState({q:'london'})
  const [units,setUnits] = useState('metric')
  const [weather,setWeather] = useState(null)

  useEffect(()=>{
    const fetchWeather = async () =>{
      const message = query.q ? query.q : 'current location.'

      toast.info('Fetching weather for ' + message);
      await getFormattedWeatherData({...query,units})
      .then(data=>{
        toast.success(`Showind data for ${data.name}, ${data.country}`)
        setWeather(data)
        
      })
    };
    fetchWeather();
  },[query,units])

  useEffect(()=>{
    formatBackground();

  },[weather])

  const formatBackground = () =>{
    const div = document.getElementById('container_background')
    let standard = 'mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 rounded-[5px]'

    div.className = standard
    if(!weather){
      div.className += ' from-cyan-700 to to-blue-700'
      return
    }
    const threshold = units === 'metric' ? 20 : 78;


    if(weather.temp.toFixed() <= threshold){
      div.className += ' from-cyan-700 to to-blue-700'
      return
    }
    div.className += ' from-yellow-700 to to-orange-700'
  }

 
 


  return (
    <>
      <div id="container_background" className={` `}>
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather && (
          <div>
            <TimeAndLocation weather={weather}/>
            <TemperatureAndDetails weather={weather}/>
            <Forecast title="Hourly Forecast" items={weather.hourly}/>
            <Forecast title="Daily Forecast" items={weather.daily}/>
          </div>
        )}
      </div>
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>

    
    </>
    
  );
}

