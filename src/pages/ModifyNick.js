import React ,{useEffect, useState}from "react";
import styled from "styled-components";
import {Button, Grid, Input, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ModifyNick = () => {
  const dispatch = useDispatch();
  const location = useLocation(); 
  const oldNick = location.state.nickname;
  const [nickname,setNickname] = useState(oldNick);
  const changeNickname = (e) => {setNickname(e.target.value)};
  const newNick = ()=> {
    if (nickname ===""){
      window.alert("변경할 닉네임을 입력해주세요!")
    }else{
      dispatch(userActions.modifyNickDB(nickname))
    }
  }
  const [inputNick,setInputNick] = useState(false);
  const focusNick = () => {setInputNick(true)};
  const blurNick = () => {setInputNick(false)};
    return (
        <Container>
            <Head>
            <Grid width="auto" _onClick={()=> {history.replace("/userinfo")}}>
              <FontAwesomeIcon icon={faAngleLeft}/>
            </Grid>
              <Text center color="#4F4F4F" size="18px">닉네임 변경</Text>
          </Head>
          <TextInput>
              <label>닉네임</label>
              <input placeholder="변경할 닉네임을 입력하세요" value={nickname} onChange={changeNickname} onFocus={focusNick} onBlur={blurNick}></input>
              <p style={{display: inputNick? null: "none", marginBottom:"0px"}}> 2~10자 이내의 한글, 영문자 조합(특수문자,공백 제외)</p>
          </TextInput>
          <Button width="calc(100% - 80px)" margin="40px" _onClick={()=>{newNick()}}>변경하기</Button>
        </Container>
    )
}

export default ModifyNick;

const Container = styled.div`
background-color: #FFFBF1;
`;
const Head = styled.div`
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 15% 4.35% 0;
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > div {
    float: left;
  }
  & > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.5px;
    color: #4F4F4F;
  }
  svg{
    font-size: 25px;
    color: #4F4F4F;
  }
`;
const TextInput = styled.div`
  display: grid;
  margin: 0 30px 15px;
  label{
    font-size: 18px;
    color: #5a5a5a;
    font-weight: 400;
  }
  input{
  height: 58px;
  margin: 15px 0px 0px;
  border-radius: 10px;
  box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
  background-color: #fff;
  border:none;
  font-size: 16px;
  font-family: inherit;
  padding: 0 18px;

  &::placeholder{
  color: #bdbdbd;
  text-align: left;
  }
  }
  p{
    font-size: 14px;
    color: #828282;
  }
`;