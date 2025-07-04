import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import { Padding } from '@mui/icons-material';



export default function InfoBox({ info }) {
   
    return (
        <div id="InfoBox">
            <Card id="InfoCard" sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">  
                        <p>{info.icon && <img src={info.icon} alt="weather icon" />} <br /> {info.weather}</p>
                        
                        <h5>{info.city}, {info.region} - {info.country} </h5>
                    </Typography>
                    <Typography  variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Feels Like: {info.feelsLike}&deg;C</p>
                        <p>Wind: {info.wind}kph</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Heat Index: {info.heatIndex} </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}