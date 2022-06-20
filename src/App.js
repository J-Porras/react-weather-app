import './App.css';

import { Inputs } from './components/Inputs';
import { TopButtons } from './components/TopButtons';


export function App() {
  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700
        h-fit shadow-xl shadow-gray-400 rounded-[5px]'>
        <TopButtons/>
        <Inputs/>

      </div>
    
    </>
    
  );
}

