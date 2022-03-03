import React from "react";
import MainMap from "../components/MainMap";
import Weather from "../components/Weather";
import Stopwatch from "../components/Stopwatch";
import Stopwatch2 from "../components/SwV2";
import Kakao from "../shared/Kakao";

const Main = () => {

    return(
        <React.Fragment>
            <MainMap></MainMap>
            <Weather></Weather>
            <Stopwatch></Stopwatch>
            <Stopwatch2></Stopwatch2>
            <Kakao></Kakao>
        </React.Fragment>
    )
}

export default Main