import React, {useEffect} from "react";
import {history} from "../redux/configStore"
import {Grid} from "../elements/Index"
import styled, {keyframes} from "styled-components";
import { useSelector } from "react-redux";
import { logo, text_logo } from "../static/images";

const Loding = () => {

    const is_login = useSelector((state) => state.user.is_login);

    const timeout = () => {
        setTimeout(() => {
            if (is_login) {history.replace("/main")} //로그인 한 유저는 이용 가이드 건너뛰고 메인으로 보내기
            else {history.replace("/guideslide")}
        }, 3000);
    };

    useEffect(() => {
        timeout();
        return () => {clearTimeout(timeout);};
    });

    return (
        <Load>
            <Grid height="auto" center padding="0 15%;">
                <img src={logo} alt="intro img"></img>
                <LoadTitle>
                    <img src={text_logo} alt="intro title"></img>
                </LoadTitle>
                <ProgressBar>
                    <Bar></Bar>
                </ProgressBar>
            </Grid>
        </Load>
    )
}

export default Loding;

const BarWidth = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const Load = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main_1};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        margin-bottom: 20px;
    }
`

const LoadTitle = styled.div`
    img{
        width: 140px;
    }
`

const ProgressBar = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 12px;
    margin: 120px 0 0;
    border-radius: 36px;
    background-color: #ebebeb;
`

const Bar = styled.div`
    position: absolute; 
    left: 0; 
    top: 0;
    bottom: 0; 
    background-color: #ffd04c;
    width: 0%;
    height: 12px;
    animation: ${BarWidth} 3s 1 linear;
    border-radius: 36px;
`
