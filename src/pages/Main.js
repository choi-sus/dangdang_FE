import React ,{useState}from "react";
import styled from "styled-components"
import MainMap from "../components/MainMap";
import Weather from "../components/Weather";
import { Link } from 'react-router-dom';
import {Text} from "../elements/Index";
import {history} from "../redux/configStore";

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
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V23.9688H13.8106L22.125 14.9615V0H0ZM1.5 1.625H20.625V12.5938H11.625V22.3438H1.5V1.625ZM13.1894 22.3438H13.125V14.2188H20.625V14.2885L13.1894 22.3438Z" fill="white"/>
                    <path d="M8.625 13.4062V9.34375H12.375V7.71875H8.625V3.65625H7.125V7.71875H3.375V9.34375H7.125V13.4062H8.625Z" fill="white"/>
                    </svg>
                    <Text color="#fff" size="14px">산책일지</Text>
                </WalkList>
                <MyPage onClick={()=> {history.replace("/profile")}}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0003 4.58203C9.01708 4.58203 4.16699 9.43212 4.16699 15.4154C4.16699 21.3986 9.01708 26.2487 15.0003 26.2487C20.9836 26.2487 25.8337 21.3986 25.8337 15.4154C25.8337 9.43212 20.9836 4.58203 15.0003 4.58203Z" stroke="white" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.62744 22.2908C6.62744 22.2908 9.04219 19.2077 15.0005 19.2077C20.9589 19.2077 23.3747 22.2908 23.3747 22.2908M15.0005 15.416C15.8625 15.416 16.6891 15.0736 17.2986 14.4641C17.9081 13.8546 18.2505 13.028 18.2505 12.166C18.2505 11.3041 17.9081 10.4774 17.2986 9.86792C16.6891 9.25843 15.8625 8.91602 15.0005 8.91602C14.1386 8.91602 13.3119 9.25843 12.7024 9.86792C12.0929 10.4774 11.7505 11.3041 11.7505 12.166C11.7505 13.028 12.0929 13.8546 12.7024 14.4641C13.3119 15.0736 14.1386 15.416 15.0005 15.416Z" stroke="white" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Text color="#fff" size="14px">프로필</Text>
                </MyPage>
                <MainBtn>
                    <Link to={{pathname:'/walk', state:{nowLoca}}}>
                        <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_319_8080)">
                        <circle cx="54" cy="54" r="44" fill="white"/>
                        </g>
                        <ellipse rx="5.98376" ry="9.65551" transform="matrix(0.981808 -0.189878 0.190923 0.981605 46.9574 39.6151)" fill="#FFD04C"/>
                        <ellipse rx="5.98156" ry="8.90861" transform="matrix(0.913758 -0.406258 0.408191 0.912897 35.5211 52.2475)" fill="#FFD04C"/>
                        <ellipse rx="5.98323" ry="9.65638" transform="matrix(-0.965776 -0.259378 -0.260758 0.965404 62.8398 39.8739)" fill="#FFD04C"/>
                        <ellipse rx="5.98156" ry="8.90861" transform="matrix(-0.913758 -0.406258 -0.408191 0.912897 72.3168 55.6088)" fill="#FFD04C"/>
                        <path d="M37.6348 75.5302C39.8883 79.2756 47.2369 78.0858 51.8639 76.3692C53.6054 75.8731 56.2561 75.7399 58.6167 77.1843C61.5673 78.9898 69.7436 77.7677 68.9591 72.081C67.9532 64.7906 59.9317 54.8365 53.8292 54.77C45.0438 54.6741 34.818 70.8485 37.6348 75.5302Z" fill="#FFD04C"/>
                        <defs>
                        <filter id="filter0_d_319_8080" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.524883 0 0 0 0 0.180833 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_8080"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_8080" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
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
    svg {
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
    svg {
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