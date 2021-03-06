import { React, useState } from "react";
import axios from "axios";
import { useStateWithCallbackLazy } from "use-state-with-callback";

import { getForecaste } from "./components/api/getForecaste";
//components
import SearchCity from "./components/SearchCity";
import CurrentWeather from "./components/CurrentWeather";
import NotFind from "./components/NotFind";
//functions

function App() {
  const [cityName, setCityName] = useStateWithCallbackLazy({});
  const [forecaste, setForecaste] = useState([]);
  const [isFind, setIsFind] = useState(false);
  const clickHandler = (name) => {
   if (name){
    getCityName(name);
  } else {
    setIsFind(true)
  }

   
  };

  const getCityName = async (name) => {
   
      
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=f469ffbe268909318848e0dd79fc89e2`
      );
      if (response.data.length) {
        setCityName({ ...response.data[0] }, (currentState) => {
          const fetchForecaste = async () => {
            setForecaste(await getForecaste(currentState.lat, currentState.lon));
            
          };
  
          fetchForecaste();
          setIsFind(false);
        });
      } else {
        setIsFind(true);
      }
    
  };

  return (
    <div>
      <SearchCity clickHandler={clickHandler} />
      {isFind ? (
        <NotFind />
      ) : (
        <CurrentWeather name={cityName} forecasteWeather={forecaste} />
      )}
    </div>
  );
}

export default App;
