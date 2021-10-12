import {createContext, useState, useContext} from 'react';

const WeatherListContext = createContext();

const WeatherListProvider = ({children}) => {

    const [weatherList, setWeatherList] = useState([]);

    const values = {
        weatherList,
        setWeatherList
    }

    return (
        <WeatherListContext.Provider value={values}>{children}</WeatherListContext.Provider>
    );
};

const useWeatherList = () => useContext(WeatherListContext);

export {useWeatherList, WeatherListProvider};