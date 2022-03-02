import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import {Button, Grid, Input, Text} from "../elements/Index";
import { history } from "../redux/configStore";
import KakaoFunction from "../shared/kakao";

const Login = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [pwd, setPwd] = useState("")

    const login =()=>{
        dispatch(userActions.logInDB(id,pwd))
    }

    return(
        <React.Fragment>
            <h2>로그인</h2>
            <Input placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
            <Input placeholder="비밀번호를 입력해주세요." _onChange={(e)=> {setPwd(e.target.value);}} type="password"></Input>
            <Grid>
                <Text _onClick={()=> {history.replace("/find")}}>아이디/ 비밀번호 찾기</Text>
            </Grid>
            <Grid>
                <Button _onClick={login} text="로그인" marign="0 0 10px 0"></Button>
                <Button _onClick={()=> {history.replace("/signup")}} text="회원가입"></Button>
            </Grid>
            <Grid>
                <Button _onClick={KakaoFunction.KakaoLogin} text="카카오 로그인"></Button>
                <Button _onClick={KakaoFunction.kakaoLogout} text="카카오 로그아웃"></Button>
                <Button text="네이버 로그인"></Button>
            </Grid>
        </React.Fragment>
    )
}

export default Login