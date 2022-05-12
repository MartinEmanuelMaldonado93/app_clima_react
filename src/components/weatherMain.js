
export default function WeatherMainInfo({weather}) {
    return(
        <div id='displayWeather'>
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`} 
                    width='120'
                    alt={weather?.current.condition.text}/>
                </div>
                <div>
                    <div>
                        {weather?.current.condition.text}
                    </div>
                    <div>
                        {weather?.current.temp_c}°C
                    </div>
                </div>

                <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`} width="400" height="300" 
                title="mapa"
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}