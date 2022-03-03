import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import {Button, Grid, Input, Text} from "../elements/Index";
import { history } from "../redux/configStore";
import styled from "styled-components";
import KakaoLogin from "../components/KakaoLogin";

const Login = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [pwd, setPwd] = useState("")

    const login =()=>{
        dispatch(userActions.logInDB(id,pwd))
    }
    
    return(
        <LonginContainer>
            <img src="img/logo.jpg" alt="로고 이미지"></img>
            <Grid margin="0 0 20px 0">
                <Input margin="0 0 25px 0" placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
                <Input placeholder="비밀번호를 입력해주세요." _onChange={(e)=> {setPwd(e.target.value);}} type="password"></Input>
            </Grid>
            <Grid margin="0 0 65px 0">
                <Text color="#828282" right _onClick={()=> {history.replace("/find")}}>아이디/ 비밀번호 찾기</Text>
            </Grid>
                <Button padding="15px 0" margin="0 0 25px 0" _onClick={login} text="로그인"></Button>
                <KakaoLogin/>
                <Text margin="65px 0 0 0" center color="#828282" _onClick={()=> {history.replace("/signup")}}>회원가입</Text>
        </LonginContainer>
    )
}

export default Login

const LonginContainer = styled.div`
    padding: 150px 5% 75px;
    & > img {
        border: 1px solid #ddd;
        border-radius: 15px;
        width: 30%;
        margin: 0px auto 100px;
        display: block;
    }
`
