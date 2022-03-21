import React, {useState} from "react";
import styled from "styled-components"
import {Text} from "../elements/Index"
import {history} from "../redux/configStore"

const NavWalk = (props) => {

    const [trans, setTrans] = useState(false);

    const goList = ()=> {
        if (window.confirm("산책 기록이 사라집니다. 그래도 산책일지를 보러 가시겠습니까?")) {
            history.replace("/walklist")
        } else {
            
        }
    }

    const goPage = ()=> {
        if (window.confirm("산책 기록이 사라집니다. 그래도 프로필을 보러 가시겠습니까?")) {
            history.replace("/profile")
        } else {
            
        }
    }

    const playStop = ()=> {
    }

    return(
        <React.Fragment>
            <NavBar>
                <WalkList onClick={goList}>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V23.9688H13.8106L22.125 14.9615V0H0ZM1.5 1.625H20.625V12.5938H11.625V22.3438H1.5V1.625ZM13.1894 22.3438H13.125V14.2188H20.625V14.2885L13.1894 22.3438Z" fill="white"/>
                    <path d="M8.625 13.4062V9.34375H12.375V7.71875H8.625V3.65625H7.125V7.71875H3.375V9.34375H7.125V13.4062H8.625Z" fill="white"/>
                    </svg>
                    <Text color="#fff" size="14px">산책일지</Text>
                </WalkList>
                <MyPage onClick={goPage}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0003 4.58203C9.01708 4.58203 4.16699 9.43212 4.16699 15.4154C4.16699 21.3986 9.01708 26.2487 15.0003 26.2487C20.9836 26.2487 25.8337 21.3986 25.8337 15.4154C25.8337 9.43212 20.9836 4.58203 15.0003 4.58203Z" stroke="white" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.62744 22.2908C6.62744 22.2908 9.04219 19.2077 15.0005 19.2077C20.9589 19.2077 23.3747 22.2908 23.3747 22.2908M15.0005 15.416C15.8625 15.416 16.6891 15.0736 17.2986 14.4641C17.9081 13.8546 18.2505 13.028 18.2505 12.166C18.2505 11.3041 17.9081 10.4774 17.2986 9.86792C16.6891 9.25843 15.8625 8.91602 15.0005 8.91602C14.1386 8.91602 13.3119 9.25843 12.7024 9.86792C12.0929 10.4774 11.7505 11.3041 11.7505 12.166C11.7505 13.028 12.0929 13.8546 12.7024 14.4641C13.3119 15.0736 14.1386 15.416 15.0005 15.416Z" stroke="white" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Text color="#fff" size="14px">프로필</Text>
                </MyPage>
                <MainBtn onClick={()=> {setTrans(!trans)}}>
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
                </MainBtn>
            </NavBar>
            <NavInner className={trans === true ? "trans_nav" : ""}>
                <NavList onClick={()=>{props.walkEnd();}}>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.72852" y="4.22656" width="22" height="22" rx="3" fill="#FFD04C"/>
                    </svg>
                    <ListTitle>산책종료</ListTitle>
                </NavList>
                <NavList>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="3" width="6.2295" height="24" rx="1" fill="#FFD04C"/>
                        <rect x="18.7705" y="3" width="6.2295" height="24" rx="1" fill="#FFD04C"/>
                    </svg>
                    <ListTitle onClick={()=>{playStop(); props.walkPause();}}>일시정지</ListTitle>
                </NavList>
                <NavList onClick={()=> {history.replace("/guide")}}>
                    <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.05127 8.10742C7.05127 8.10742 8.85127 5.60742 13.0513 5.60742C17.2513 5.60742 19.0513 8.10742 19.0513 8.10742V25.6074C19.0513 25.6074 17.2513 24.3574 13.0513 24.3574C8.85127 24.3574 7.05127 25.6074 7.05127 25.6074V8.10742ZM19.0513 8.10742C19.0513 8.10742 20.8513 5.60742 25.0513 5.60742C29.2513 5.60742 31.0513 8.10742 31.0513 8.10742V25.6074C31.0513 25.6074 29.2513 24.3574 25.0513 24.3574C20.8513 24.3574 19.0513 25.6074 19.0513 25.6074V8.10742Z" fill="#FFD04C"/>
                        <path d="M19.0513 8.10742C19.0513 8.10742 17.2513 5.60742 13.0513 5.60742C8.85127 5.60742 7.05127 8.10742 7.05127 8.10742V25.6074C7.05127 25.6074 8.85127 24.3574 13.0513 24.3574C17.2513 24.3574 19.0513 25.6074 19.0513 25.6074M19.0513 8.10742V25.6074M19.0513 8.10742C19.0513 8.10742 20.8513 5.60742 25.0513 5.60742C29.2513 5.60742 31.0513 8.10742 31.0513 8.10742V25.6074C31.0513 25.6074 29.2513 24.3574 25.0513 24.3574C20.8513 24.3574 19.0513 25.6074 19.0513 25.6074" stroke="#FFD04C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="18.2715" y="5.22461" width="1.55943" height="16.7867" rx="0.779713" fill="#FFFBF1"/>
                    </svg>
                    <ListTitle>가이드북</ListTitle>
                </NavList>
            </NavInner>
        </React.Fragment>
    )
}

export default NavWalk

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

const NavInner = styled.div`
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: -210px;
    width: 295px;
    height: 295px;
    border-radius: 50%;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 25%);
    background-color: #fffbf1;
    z-index: 1;
    transition: bottom 0.8s ease-in-out;
    &.trans_nav{
        bottom: -65px;
    }
`

const NavList = styled.div`
    position: absolute;
    text-align: center;
    &:nth-child(1) {
        top: 65px;
        left: 32px;
    }
    &:nth-child(2) {
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
    }
    &:nth-child(3) {
        top: 65px;
        right: 32px;
    }
`
const ListTitle = styled.span`
    display: block;
    font-size: 14px;
    color: #828282;
`