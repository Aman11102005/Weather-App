import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({

        city: "",
        feelsLike: 0,
        temp: 0,
        wind: 0,
        humidity: 0,
        weather: "",
        icon: "",
        heatIndex: 25.0,
        country: "",
        region:""

    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div>
            <h2>Weather App { <img src="/weather-app.png" width={40} alt="Weather App Icon" /> }</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}