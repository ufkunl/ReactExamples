import React from "react";
import { useState, useEffect } from "react";
import { useWeatherList } from "../context/WeatherListContext";



function Header() {

  const weatherListContext = useWeatherList();
  
  const [selectedCity, setSelectedCity] = useState("Edirne");

  const onChangeCities = (event) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    citiesHandle(selectedCity);
  }, [selectedCity]);

  const citiesHandle = (city) => {
      if(city === "Edirne"){
          weatherListContext.setWeatherList(mockData1);
          return true;
      }else if(city === "Istanbul"){
          weatherListContext.setWeatherList(mockData2);
          return true;
      }else{
          return false;
      }
  };

  return (
    <div className="header">
      <select
        className="citiesComboBox"
        name="cities"
        onChange={onChangeCities}
      >
        <option value="Edirne">Edirne</option>
        <option value="Istanbul">Istanbul</option>
        <option value="Kocaeli">Kocaeli</option>
      </select>
    </div>
  );
}


// const CitiesHandleFromAPI = (city) => {

//   const weatherListContext = useWeatherList();
//   const KEY = "4bc74841db2017c4a278683486ef2892";

//   var options = {
//     method: "GET",
//     url: "https://api.openweathermap.org/data/2.5/forecast",
//     params: { q: city, appid: KEY, cnt: 15 },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//           weatherListContext.setWeatherList(response.data.list);
//       return true
//     })
//     .catch(function (error) {
//       console.error(error);
//       return false;
//     });
// };

const mockData1 = [
    {
        tempDay: 15,
        tempNight:10,
        icon: "rained",
        dayName: "Wed"
    }
]

const mockData2 = [
  {
      tempDay: 30,
      tempNight:15,
      icon: "sunny",
      dayName: "Wed"
  }
]

export default Header;
