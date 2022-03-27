import React ,{useState} from "react";
import styled from "styled-components";
import {Button, Grid, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ModifyNick = () => {

  const dispatch = useDispatch();
  const location = useLocation(); 

  const oldNick = location.state.nickname;
  const [nickname,setNickname] = useState(oldNick);
  const [inputNick,setInputNick] = useState(false);

  const changeNickname = (e) => {setNickname(e.target.value)};
  const focusNick = () => {setInputNick(true)};
  const blurNick = () => {setInputNick(false)};

  const newNick = ()=> {
    if (nickname ===""){
      window.alert("변경할 닉네임을 입력해주세요!")
    }else{
      dispatch(userActions.modifyNickDB(nickname))
    }
  }
  
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
        <p style={{display: inputNick? null: "none", marginBottom:"0px"}}>
          2~10자 이내의 한글, 영문자 조합(특수문자,공백 제외)
        </p>
      </TextInput>
      <Button width="calc(100% - 80px)" margin="40px" _onClick={()=>{newNick()}}>변경하기</Button>
    </Container>
  )
}

export default ModifyNick;

const Container = styled.div`
  height: inherit;
  padding: 15.5% 0;
  button:last-child {
    position: absolute;
    top: 80%;
  }
`;
const Head = styled.div`
  margin-bottom: 25px;
  padding: 0 ${({ theme }) => theme.paddings.lg};
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > div {
    float: left;
  }
  & > p {
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeight.base};
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray_4};
  }
  svg {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.gray_4};
    cursor: pointer;
  }
`;
const TextInput = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.paddings.xxl} 30px;
  label {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray_3};
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
  }
  input {
    height: 58px;
    margin: ${({ theme }) => theme.margins.xxl} 0px 0px;
    border-radius: 10px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    background-color: ${({ theme }) => theme.colors.white};
    border:none;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: inherit;
    padding: 0 ${({ theme }) => theme.paddings.xl};
    &::placeholder{
      color: ${({ theme }) => theme.colors.gray_2};
      text-align: left;
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.gray_3};
    margin: ${({ theme }) => theme.margins.xxl} 0 0 ${({ theme }) => theme.margins.base};
  }
`;