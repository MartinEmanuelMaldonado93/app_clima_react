import {useEffect, useState} from 'react';
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo';

import styles from './weatherApp.module.css';
import Loading from './loading';


export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    useEffect( ()=>{
        loadInfo('Argentina');
    },[]);

    useEffect( ()=>{
        document.title = `Weather | ${weather?.location.name ?? ''} `;
    },[weather]);

    async function loadInfo( city='london') {
        try {  
            // const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);  // undefined
            const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=ca8d2053a96e4faba33100829221205&q=${city}&aqi=no`);

            const json = await request.json();
             
            setWeather(json);

        } catch (error) {
            
        }
    }
    function handleChangeCity(city) {
       setWeather(null);
       loadInfo(city);
    }
    return (
    <div className = {styles.weatherContainer}> 
        <WeatherForm  onChangeCity={handleChangeCity}/>
        {   weather ? 
            <WeatherMainInfo weather={weather}/>
            :<Loading/>}
        
    </div>
    );
}

