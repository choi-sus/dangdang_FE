import React, {useState} from "react";
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {Button, Grid, Input, Text} from "../elements/Index"
import { history } from "../redux/configStore";

const SignUp = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [nickname, setNickname] = useState();
    const [pwd, setPwd] = useState();
    const [confirmPwd, setConfirmPwd] = useState();

    const signup = () => {
        if (email === "" || nickname === "" || id === "" || pwd === "" || confirmPwd === "") {
          window.alert("입력란을 빠짐없이 입력해주세요");
          return;
        }
        if (pwd !== confirmPwd){
          window.alert("비밀번호가 다릅니다 다시 확인해 주세요")
        }
        dispatch(userActions.signUpDB(id,email,nickname,pwd,confirmPwd));
        history.push("/login");
      };

    return (
        <React.Fragment>
            <h2>회원가입</h2>            
            <Input value={id} _onChange={(e)=>{setId(e.target.value);}} type="text" placeholder="아이디"></Input>
            <Input value={email} _onChange={(e)=>{setEmail(e.target.value);}} type="text" placeholder="이메일"></Input>
            <Input value={nickname} _onChange={(e)=>{setNickname(e.target.value);}} type="text" placeholder="닉네임"></Input>
            <Input value={pwd} _onChange={(e)=>{setPwd(e.target.value);}} type="password" placeholder="비밀번호"></Input>
            <Input value={confirmPwd} _onChange={(e)=>{setConfirmPwd(e.target.value);}} type="password" placeholder="비밀번호 확인"></Input>
            <Button _onClick={()=>{signup();}} text="회원가입"></Button>
        </React.Fragment>
    )
}

export default SignUp