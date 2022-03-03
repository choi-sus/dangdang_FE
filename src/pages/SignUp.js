import React, {useState} from "react";
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {Button, Grid, Input, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
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
        dispatch(userActions.signUpDB(id, email, nickname, pwd, confirmPwd));
      };

    return (
        <SignContainer>
          <Head>
            <Grid width="auto" _onClick={()=> {history.replace("/login")}}>
              <FontAwesomeIcon icon={faAngleLeft}/>
            </Grid>
            <Text center color="#4F4F4F" size="18px">회원가입</Text>
          </Head>
            <h2>회원가입</h2>
            <Grid margin="0 0 65px 0">
              <Input margin="0 0 25px 0" value={id} _onChange={(e)=>{setId(e.target.value);}} type="text" placeholder="아이디"></Input>
              <Input margin="0 0 25px 0" value={email} _onChange={(e)=>{setEmail(e.target.value);}} type="text" placeholder="이메일"></Input>
              <Input margin="0 0 25px 0" value={nickname} _onChange={(e)=>{setNickname(e.target.value);}} type="text" placeholder="닉네임"></Input>
              <Input margin="0 0 25px 0" value={pwd} _onChange={(e)=>{setPwd(e.target.value);}} type="password" placeholder="비밀번호"></Input>
              <Input value={confirmPwd} _onChange={(e)=>{setConfirmPwd(e.target.value);}} type="password" placeholder="비밀번호 확인"></Input>
            </Grid>            
            <Button _onClick={()=>{signup();}} text="가입하기"></Button>
        </SignContainer>
    )
}

export default SignUp

const SignContainer = styled.div`
  padding: 10px 5% 0;
  h2 {
    font-size: 28px;
    margin: 0 0 40px 0;
  }
`
const Head = styled.div`
  margin-bottom: 80px;
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > div {
    float: left;
  }
  & > p {
    line-height: 45px;
  }
  svg{
    font-size: 45px;
    color: #4F4F4F;
  }
`