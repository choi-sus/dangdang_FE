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

    return(
        <React.Fragment>
            <h2>로그인</h2>
            <Input placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
            <Input placeholder="비밀번호를 입력해주세요." _onChange={(e)=> {setPwd(e.target.value);}} type="password"></Input>
            <Grid>
                <Button _onClick={login} text="로그인" marign="0 0 10px 0"></Button>
                <Button _onClick={()=> {history.push("/signup")}} text="회원가입"></Button>
            </Grid>
        </React.Fragment>
    )
}

export default Login