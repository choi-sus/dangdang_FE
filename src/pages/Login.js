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
    padding: 15.5% ${({ theme }) => theme.paddings.xxxxl};
    box-sizing: border-box;
    height: inherit;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    button:last-of-type {
        background-color: ${({ theme }) => theme.colors.white};
        color: #382020;
    }
    div > p {
        cursor: pointer;
    }
`

const LogoContent = styled.div`
    text-align: center;
    margin: 85px 0;
`

const TextOter = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray_3};
    margin: 0 0 35px 0;
    position: relative;
    &:before {
        content:"";
        width: 40%;
        height: 0.5px;
        background-color: ${({ theme }) => theme.colors.gray_2};
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    &:after {
        content:"";
        width: 40%;
        height: 0.5px;
        background-color: ${({ theme }) => theme.colors.gray_2};
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`
