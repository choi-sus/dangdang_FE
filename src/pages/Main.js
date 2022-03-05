import React ,{useState}from "react";
import MainMap from "../components/MainMap";
import Weather from "../components/Weather";
import Kakao from "../shared/Kakao";
import {Button, Grid, Input, Text} from "../elements/Index"
import {history} from "../redux/configStore"
import { Link } from 'react-router-dom';

const Main = () => {
    const [nowLoca,setNowLoca] = useState();
    const reciveLoca = (Loca) => {
        setNowLoca(Loca)
    }
    return(
        <React.Fragment>
            <MainMap defaultLoca={reciveLoca}></MainMap>
            <Weather></Weather>
            <Kakao></Kakao>
            {/* <Text _onClick={()=> {history.push("/walk");}}>지금 바로 산책가기</Text> */}
            <Link to={{pathname:'/walk', state:{nowLoca}}}>지금바로산책</Link>
        </React.Fragment>
    )
}

export default Main