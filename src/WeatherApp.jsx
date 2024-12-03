import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city: 'delhi',
        feelslike: 17.56,
        humidity: 63,
        temp: 18.05,
        tempMax: 18.05,
        tempMin: 18.05,
        weather: 'haze',
    });

    let updateInfo = (newInfo) => {
       setweatherInfo(newInfo); 
    }
     return(
     <div>
<h2>Weather App by delta</h2>
<SearchBox updateInfo={updateInfo}/>
<InfoBox info={weatherInfo}/>
     </div>
     );
}