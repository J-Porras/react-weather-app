import { React} from "react";
import { formatToLocalTime } from "../services/WeatherService";


export function TimeAndLocation({weather:{dt,timezone,name,country}}){
    return(
        <>          
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight tracking-[0.020em] "> 
                    {formatToLocalTime(dt,timezone)}
                </p>
                
                
            </div>
            <div className="flex items-center justify-center my-6">
                    <p className="text-white text-3xl font-medium tracking-[0.020em] ">{`${name}, ${country}`}</p>
            </div>
        
        
        </>


    );
}