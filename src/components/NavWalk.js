import React, {useState} from "react";
import styled from "styled-components"
import {Text, Grid} from "../elements/Index"
import {history} from "../redux/configStore"
import { nav_homebtn, nav_profile, nav_walklist, walk_end, walk_guide, walk_pause, walk_restart} from "../static/images";

const NavWalk = (props) => {

    const [trans, setTrans] = useState(false);
    const [pause, setPause] = useState(false);

    const goList = ()=> {
        if (window.confirm("산책 기록이 사라집니다. 그래도 산책일지를 보러 가시겠습니까?")) {
            history.replace("/walklist")
        } else {
            return;
        }
    }

    const goPage = ()=> {
        if (window.confirm("산책 기록이 사라집니다. 그래도 프로필을 보러 가시겠습니까?")) {
            history.replace("/profile")
        } else {
            return;
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
                    <img src={walk_end} alt="산책 종료 아이콘" />
                    <ListTitle>산책종료</ListTitle>
                </NavList>
                <NavList onClick={()=> {setPause(!pause);}}>
                    {
                        pause === false ?
                        <Grid _onClick={()=>{props.walkPause();}}>
                            <img src={walk_pause} alt="산책 일시정지 아이콘" />
                            <ListTitle>일시정지</ListTitle>
                        </Grid> :
                        <Grid _onClick={()=>{props.walkRestart();}}>
                            <img src={walk_restart} alt="산책 재시작 아이콘" />
                            <ListTitle>시작</ListTitle>
                        </Grid>
                    }
                </NavList>
                <NavList onClick={()=>{props.goGuide();}}>
                    <img src={walk_guide} alt="가이드북 아이콘" />
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
    background-color: ${({ theme }) => theme.colors.main_2};
    border-radius: 35px 35px 0 0;
    box-sizing: border-box;
    padding: 15px 60px 25px;
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
    cursor: pointer;

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
    cursor: pointer;

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
    bottom: 35px;
    width: 108px;
    height: 108px;
    border-radius: 50%;
    cursor: pointer;
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
    background-color: ${({ theme }) => theme.colors.main_1};
    z-index: 1;
    transition: bottom 0.8s ease-in-out;

    &.trans_nav{
        bottom: -72px;;
    }
`

const NavList = styled.div`
    position: absolute;
    text-align: center;
    cursor: pointer;

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
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.gray_3};
`