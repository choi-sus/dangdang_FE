import React from "react";
import MainMap from "../components/MainMap";
import Weather from "../components/Weather";
import Kakao from "../shared/Kakao";

const Main = () => {

    return(
        <React.Fragment>
            <MainMap></MainMap>
            <Weather></Weather>
            <Kakao></Kakao>
        </React.Fragment>
    )
}

export default Main