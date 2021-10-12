import React from 'react'
import { useWeatherList } from '../context/WeatherListContext';

function WeatherList() {

    const {weatherList,setWeatherList} = useWeatherList();

    console.log(weatherList)

    return (
        <div className='weather-list'>
            <div>
                <p>Wed</p>
                <img src=''></img>
            </div>
        </div>
    )
}

export default WeatherList;
