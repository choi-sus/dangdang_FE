import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import {Button, Grid, Input, Text} from "../elements/Index"
import { history } from "../redux/configStore";

const Login = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [pwd, setPwd] = useState("")

    const login =()=>{
        dispatch(userActions.logInDB(id,pwd))
        history.replace("/");
    }

    const { naver } = window;
    // const location = React.useLocation();
    const NAVER_CALLBACK_URL = 'http://localhost:3000';
    const NAVER_CLIENT_ID = '';

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'white', type: 1, height: '47' },
        });
        naverLogin.init();
    };

    // const getNaverToken = () => {
    //     if (!location.hash) return;
    //     const token = location.hash.split('=')[1].split('&')[0];
    //     console.log(token);
    // };

    React.useEffect(() => {
        initializeNaverLogin();
        // getNaverToken();
    }, []);

    return(
        <React.Fragment>
            <h2>로그인</h2>
            <Input placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
            <Input placeholder="비밀번호를 입력해주세요." _onChange={(e)=> {setPwd(e.target.value);}} type="password"></Input>
            <Grid>
                <Button _onClick={login} text="로그인" marign="0 0 10px 0"></Button>
                <Button _onClick={()=> {history.push("/signup")}} text="회원가입"></Button>
            </Grid>
            <Grid>
                <Button text="카카오 로그인"></Button>
                <Button text="네이버 로그인"></Button>
            </Grid>
        </React.Fragment>
    )
}

export default Login