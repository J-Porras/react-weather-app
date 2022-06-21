import {React} from "react";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

export function TemperatureAndDetails(){
    return (
      <>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
          <p>Time Is</p>
        </div>
        <div className="flex items-center justify-between py-3 text-white">
          <div className="w-20">Climate Image</div>
          <p className="text-5xl">34°</p>
          <div className="flex flex-col space-y-2 ">
            <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="mr-1"/>
                Wind Speed:
                <span className="font-medium ml-1"> 32 km/h</span>

            </div>
            <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={18} className="mr-1"/>
                Real Feel:
                <span className="font-medium ml-1"> 32°</span>

            </div>

            <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={18} className="mr-1"/>
                Humidity:
                <span className="font-medium ml-1"> 32%</span>

            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun/>
            <p></p>
        </div>        

      </>
    );
}