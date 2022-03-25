import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import {Button, Grid, Input, Text} from "../elements/Index";
import { history } from "../redux/configStore";
import styled from "styled-components";
import KakaoLogin from "../components/KakaoLogin";
import { text_logo } from "../static/images";

const Login = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [pwd, setPwd] = useState("")

    const login =()=>{
        dispatch(userActions.logInDB(id,pwd))
    }

    return(
        <LonginContainer>
            <LogoContent> 
                <img src={text_logo} alt="text logo" />
            </LogoContent>
            <Grid margin="0 0 35px 0" height="auto">
                <Input margin="0 0 15px 0" placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
                <Input placeholder="비밀번호를 입력해주세요." _onChange={(e)=> {setPwd(e.target.value);}} type="password"></Input>
            </Grid>
            <Grid margin="0 0 40px 0" height="auto">
                <Text color="#828282" size="14px" right _onClick={()=> {history.replace("/find")}}>아이디/ 비밀번호 찾기</Text>
            </Grid>
                <Button margin="0 0 10px 0" _onClick={login} text="로그인"></Button>
                <Button margin="0 0 35px 0" _onClick={()=> {history.replace("/signup")}} text="회원가입"></Button>
                <TextOter>또는</TextOter>
                <KakaoLogin/>
        </LonginContainer>
    )
}

export default Login

const LonginContainer = styled.div`
    background-color: #FFFBF1;
    padding: 15.5% 10.25%;
    box-sizing: border-box;
    & > img {
        border: 1px solid #ddd;
        border-radius: 15px;
        width: 30%;
        margin: 0px auto 100px;
        display: block;
    }
    @media screen and (min-height: 0) and (max-height: 800px){
        /* height: auto; */
    }
    button {
        box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    }
    button:last-of-type {
        background-color: #fff; color: #382020;
    }
`

const LogoContent = styled.div`
    text-align: center;
    margin: 85px 0;
`

const TextOter = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    color: #828282;
    margin: 0 0 35px 0;
    position: relative;
    &:before {
        content:"";
        width: 40%;
        height: 0.5px;
        background-color: #BDBDBD;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    &:after {
        content:"";
        width: 40%;
        height: 0.5px;
        background-color: #BDBDBD;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`
