import React from "react";
import MainMap from "../components/MainMap";
import Weather from "../components/Weather";

const Main = () => {

    return(
        <React.Fragment>
            <MainMap></MainMap>
            <Weather></Weather>
        </React.Fragment>
    )
}

export default Main