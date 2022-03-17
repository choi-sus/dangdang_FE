import React from "react";
import styled from "styled-components"
import { useSelector} from "react-redux";
import {Text} from "../elements/Index"

const Weather = ()=> {
    const [coords, saveCoords] = React.useState();
    const [city, setCity] = React.useState();
    const [temp, setTemp] = React.useState();
    const [weather, setWeather] = React.useState();

    const user = useSelector((state) => state.user.user);

    function handleGeoSucc(position) {
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
        <WeatherContainer>
            <WeatherContent>
                <FloatBox>
                    <UserCity>{city}</UserCity>
                    <UserWeather>{weather}</UserWeather>
                </FloatBox>
                <UserTemp>{temp}°</UserTemp>
            </WeatherContent>
            <UserWalk>
                {user ? <UserNick>{`${user.nickname}님!`}<br></br>산책하러 갈까요?</UserNick> : <UserNick>로그인 후<br></br>산책하러 갈까요?</UserNick>}
                <img src="img/main.PNG" alt="강아지 이미지"></img>
            </UserWalk>
            <UserConfirm>
                <Text color="#4f4f4f" size="14px" margin="0 0 15px 0">산책 전, 챙기셨나요?</Text>
                <ConfirmList>배변봉투</ConfirmList>
                <ConfirmList>입마개</ConfirmList>
                <ConfirmList>물</ConfirmList>
            </UserConfirm>
        </WeatherContainer>
    )
}

export default Weather

const WeatherContainer = styled.div`
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 310px;
`

const WeatherContent = styled.div`
    &::after {
        content: ""; display: block; visibility: hidden; clear: both;
    }
    margin-bottom: 15px;
`

const FloatBox = styled.div`
    float: left;
    padding: 6px 0;
`

const UserCity = styled.div`
    font-size: 26px;
    color: #4f4f4f;
    margin-bottom: 5px;
`

const UserWeather = styled.div`
    font-size: 24px;
    color: #87baff;
`

const UserTemp = styled.div`
    float: right;
    font-size: 66px;
    color: #4f4f4f;
`
const UserWalk = styled.div`
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    &::after {
        content: ""; display: block; visibility: hidden; clear: both;
    }
    img {
        width: 95px;
        position: absolute;
        right: -10px;
        bottom: 0px;
    }
`

const UserNick = styled.div`
    padding: 15px 0 15px 20px;
    border-radius: 6px;
    box-shadow: 0 1px 6px 0 rgba(171, 171, 171, 0.25);
    background-color: #fff;
    font-size: 20px;
    color: #4f4f4f;
    line-height: 32px;
`

const UserConfirm = styled.div`
    padding: 20px 23px 20px 20px;
    border-radius: 6px;
    box-shadow: 0 1px 6px 0 rgba(171, 171, 171, 0.25);
    background-color: #fff;
`

const ConfirmList = styled.p`
    font-size: 16px;
    color: #4f4f4f;
    margin: 0px;
    &:not(:last-child){
        margin-bottom: 15px;
    }
    &:before{
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #ffd04c;
        border-radius: 50%;
        margin-right: 10px;
    }
`
