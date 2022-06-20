import { React } from "react";
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'

export function Inputs (){

    return (
        <>
            <div className="flex flex-row justify-center my6">
                <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                    {/* INPUT SEARCH BAR*/ }
                    <input type="text"
                    placeholder="Search for a city..."
                    className="text-xl font-light p-2 w-full shadow-xl
                     rounded-[5px] focus:outline-none capitalize placeholder:normal-case"></input>


                    <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
                    <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
                </div>

                
            </div>
        </>
    );
}