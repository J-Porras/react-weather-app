import { React} from "react";


export function TimeAndLocation(){
    return(
        <>          
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight tracking-[0.020em] "> 
                    Time and Location (Day, Date and Local Time) 
                </p>
                
                
            </div>
            <div className="flex items-center justify-center my-6">
                    <p className="text-white text-3xl font-medium tracking-[0.020em] ">City, Country</p>
            </div>
        
        
        </>


    );
}