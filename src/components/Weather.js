import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Weather = ()=> {
    const [coords, saveCoords] = React.useState();
    const [city, setCity] = React.useState();
    const [temp, setTemp] = React.useState();
    const [weather, setWeather] = React.useState();

    const user = useSelector((state) => state.user.user);

    function handleGeoSucc(position) {
        console.log(position);
        const latitude = position.coords.latitude;  // 경도  
        const longitude = position.coords.longitude;  // 위도
        const coordsObj = {latitude, longitude}
        saveCoords(coordsObj);
        getWeather(latitude, longitude);
    }

    function handleGeoErr(err) {
        console.log("geo err! " + err);
    }

    function requestCoords() {
        navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
    }

    function getWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'bc70ba3421bed731e561284325ac18dc'}&units=metric`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            const city = data.name;
            const temp = data.main.temp;
            const weathers = data.weather[data.weather.length - 1];
            setCity(city);
            setTemp(temp);
            setWeather(weathers.main);
          })
    }

    React.useEffect(() => {
      requestCoords();
    }, []);


    return(
        <React.Fragment>
            <div>{city}</div>
            <div>{temp}°</div>
            {
                user ? <div>산책하기 {weather}한 날이에요! <br></br> {`${user.nickname} 님!`}</div> : null
            }
        </React.Fragment>
    )
}

export default Weather