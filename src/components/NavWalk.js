import React, {useState} from "react";
import styled from "styled-components"
import {Text, Grid} from "../elements/Index"
import {history} from "../redux/configStore"
import { nav_homebtn, nav_profile, nav_walklist} from "../static/images";

const NavWalk = (props) => {

    const [trans, setTrans] = useState(false);
    const [pause, setPause] = useState(false);

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

    return(
        <React.Fragment>
            <NavBar>
                <WalkList onClick={goList}>
                    <img src={nav_walklist} alt="산책일지 아이콘" />
                    <Text color="#fff" size="14px">산책일지</Text>
                </WalkList>
                <MyPage onClick={goPage}>
                    <img src={nav_profile} alt="프로필 아이콘" />
                    <Text color="#fff" size="14px">프로필</Text>
                </MyPage>
                <MainBtn onClick={()=> {setTrans(!trans)}}>
                    <img src={nav_homebtn} alt="산책하기 버튼" />
                </MainBtn>
            </NavBar>
            <NavInner className={trans === true ? "trans_nav" : ""}>
                <NavList onClick={()=>{props.walkEnd();}}>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.72852" y="4.22656" width="22" height="22" rx="3" fill="#FFD04C"/>
                    </svg>
                    <ListTitle>산책종료</ListTitle>
                </NavList>
                <NavList onClick={()=> {setPause(!pause);}}>
                    {
                        pause === false ?
                        <Grid _onClick={()=>{props.walkPause();}}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" y="3" width="6.2295" height="24" rx="1" fill="#FFD04C"/>
                                <rect x="18.7705" y="3" width="6.2295" height="24" rx="1" fill="#FFD04C"/>
                            </svg>
                            <ListTitle>일시정지</ListTitle>
                        </Grid> :
                        <Grid _onClick={()=>{props.walkRestart();}}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.73359 26.8257L25.5951 15.6307C26.135 15.3102 26.135 14.6932 25.5951 14.3693L6.73359 3.17435C6.03025 2.75845 5 3.13344 5 3.805L5 26.195C5 26.8666 6.03025 27.2415 6.73359 26.8257Z" fill="#FFD04C"/>
                            </svg>
                            <ListTitle>시작</ListTitle>
                        </Grid>
                    }
                </NavList>
                <NavList onClick={()=>{props.goGuide();}}>
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