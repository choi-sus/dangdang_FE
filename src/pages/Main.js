import React from "react";
import MainMap from "../components/MainMap";
import Weather from "../components/Weather";
import Kakao from "../shared/Kakao";
import {Button, Grid, Input, Text} from "../elements/Index"
import {history} from "../redux/configStore"

const Main = () => {

    return(
        <React.Fragment>
            <MainMap></MainMap>
            <Weather></Weather>
            <Kakao></Kakao>
            <Text _onClick={()=> {history.push("/walk");}}>지금 바로 산책가기</Text>
        </React.Fragment>
    )
}

export default Main