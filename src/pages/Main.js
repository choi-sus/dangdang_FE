import React ,{useState}from "react";
import styled from "styled-components"
import MainMap from "../components/MainMap";
import Weather from "../components/Weather";
import { Link } from 'react-router-dom';
import {Text} from "../elements/Index";
import {history} from "../redux/configStore";
import { nav_homebtn, nav_profile, nav_walklist} from "../static/images";

const Main = () => {
    const [nowLoca,setNowLoca] = useState();
    const receiveLoca = (Loca) => {
        setNowLoca(Loca)
    }
    
    return(
        <MapContainer>
            <MainMap defaultLoca={receiveLoca}></MainMap>
                <Weather></Weather>
                <GridText>
                    <Link to={{pathname:'/walk', state:{nowLoca}}}>지금 바로 산책가기</Link>
                </GridText>
            <NavBar>
                <WalkList onClick={()=> {history.replace("/walklist")}}>
                    <img src={nav_walklist} alt="산책일지 아이콘" />
                    <Text color="#fff" size="14px">산책일지</Text>
                </WalkList>
                <MyPage onClick={()=> {history.replace("/profile")}}>
                    <img src={nav_profile} alt="프로필 아이콘" />
                    <Text color="#fff" size="14px">프로필</Text>
                </MyPage>
                <MainBtn>
                    <Link to={{pathname:'/walk', state:{nowLoca}}}>
                    <img src={nav_homebtn} alt="산책하기 버튼" />
                    </Link>
                </MainBtn>
            </NavBar>
        </MapContainer>
    )
}

export default Main

const MapContainer = styled.div`
    position: relative;
`
const GridText = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 168px;
    a{
        font-size: 15px;
        color: #4f4f4f;
        text-decoration: none;
    }
`

const NavBar = styled.div`
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #ffd04c;
    border-radius: 35px 35px 0 0;
    box-sizing: border-box;
    padding: 16px 65px 28px;
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: 5;
    &::after {
        content: ""; display: block; visibility: hidden; clear: both;
    }
`
const WalkList = styled.div`
    float: left;
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding: 3px 0;
    }
    p{
        letter-spacing: 0.3px;
    }
`

const MyPage = styled.div`
    float: right;
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    p {
        letter-spacing: 0.3px;
    }
`

const MainBtn = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    width: 108px;
    height: 108px;
    border-radius: 50%;
`