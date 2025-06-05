import React,{useState} from 'react';
import './../../css/Cities.css'
import {api} from './../../config/properties';
export function Cities(){
    const [weather,setWeather] = useState(undefined);
    const [loading,setLoading] = useState(false);
    const [city,setCity] = useState('');


    function searchWeather(){
        setLoading(true);
        fetch(`${api.weatherApi.route}/weather?q=${city}&units=metric&appid=${api.weatherApi.key}`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                if(json.cod !== '404'){
                    setLoading(false);
                    setWeather(json)
                    setCity('')
                }
                else{
                    setLoading(false);
                    setWeather(undefined);
                    alert(`Error: ${json.message}\nCheck your spelling and try again`)
                }
            })
            .catch(err=>{
                setLoading(false)
                setWeather(undefined);
                alert(err)
            })
    }


    function dateBuilder(datum){
        let months = ['January','February',"March",'April','May','June','July','August','September','October','November','December']
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let day = days[datum.getDay()]; //Thursday
        let date = datum.getDate(); //5
        let month = months[datum.getMonth()] //June
        let year= datum.getFullYear() //2025
        return `${day} ${date} ${month} ${year}`
    }

    return(
        <div className='cities'>
            <div className='search-box'>
                <input
                    type='text'
                    placeholder='Search Cities'
                    className='search-bar'
                    value={city}
                    onChange={(e)=>{setCity(e.target.value)}}
                />
                <button className='search-button' onClick={searchWeather}>Search</button>
            </div>

            {weather && loading === false && 
            <div className='location-container'>
                <div className='location-box'>
                    <div className='location'>
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className='date'>
                        {dateBuilder(new Date())}
                    </div>
                </div>
                <div className='weather-box'>
                    <div className='temp'>
                        {Math.round(weather.main.temp)} &#8451;
                    </div>
                    <div className='weather'>
                        {weather.weather[0].main}
                    </div>
                </div>
            </div>}
            {loading && <div className='loader'></div> }
        </div>
    )
}