import {useEffect, useState} from "react";
import weatherService from './../services/weather'

const Weather = ({city}) => {
    const [weatherData, setWeatherData] = useState({})
    const [icon, setIcon] = useState('')

    useEffect(() => {
        weatherService
            .get(city)
            .then(response => {
                setWeatherData(response.current)
                setIcon(response.current.condition.icon)
            })
    })

    return (
        <div>
            <h1>Weather in {city}</h1>
            <p>temperature {weatherData.temp_c} Celsius</p>
            <img src={icon}/>
            <p>wind {weatherData.wind_kph} km/h</p>
        </div>
    )
}

export default Weather