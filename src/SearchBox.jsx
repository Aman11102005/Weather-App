import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    const API_URL = "http://api.weatherapi.com/v1/current.json";
    // const API_KEY = "47ec45aa0c634670b9e55613251706";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    let getWeather = async () => {
        try {


            let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}&aqi=no`);
            let data = await response.json();


            if (!response.ok) {
                throw new Error("City not found");
            }


            let result = {



                temp: data.current.temp_c,
                humidity: data.current.humidity,
                feelsLike: data.current.feelslike_c,
                weather: data.current.condition.text,
                wind: data.current.wind_kph,
                icon: data.current.condition.icon,
                city: data.location.name,
                heatIndex: data.current.heatindex_c,
                country: data.location.country,
                region: data.location.region,
            };

            setError("");
            return result;
        } catch (err) {
            setError(err.message);
            return null;
        }
    };


    useEffect(() => {
        async function fetchData() {

            let response = await fetch(`${API_URL}?key=${API_KEY}&q=${"Gorakhpur"}&aqi=no`);
            let data = await response.json();



            let result = {
                temp: data.current.temp_c,
                humidity: data.current.humidity,
                feelsLike: data.current.feelslike_c,
                weather: data.current.condition.text,
                wind: data.current.wind_kph,
                icon: data.current.condition.icon,
                city: "Gorakhpur",
                heatIndex: data.current.heatindex_c,
                country: data.location.country,
                region: data.location.region,
            };

            // console.log(result);
            return updateInfo(result);
        }
        fetchData()

            ; // Initial fetch
    }, []);


    function handleChange(event) {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setCity("");
        let newInfo = await getWeather();
        if (newInfo) {
            updateInfo(newInfo);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>

                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required /><br /><br />
                <Button id='searchBtn' variant="contained" type='submit' startIcon={<SearchIcon />}>
                    Search
                </Button><br /><br />
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    );
}
