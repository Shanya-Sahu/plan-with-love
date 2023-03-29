import React , {useState} from "react";
import data from './data';
import Tours from './Components/Tours';

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id){
        const newTour = tours.filter(tour => tour.id !== id);
        setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className="flex justify-center items-center flex-col w-[100vw] h-[100vh]">
          <h1 className="text-3xl font-bold mb-4">No Tours Left!</h1>
          <button className="bg-black text-white text-xl py-2 px-4 rounded-sm" onClick={()=>{ setTours(data)}}>Refresh</button>
      </div>
    );
  }

  return(
    

<Tours tours={tours} removeTour={removeTour}></Tours>
    
  )
};

export default App;
