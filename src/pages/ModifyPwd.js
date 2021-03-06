import React,{useState} from "react";
import styled from "styled-components";
import {Button, Grid, Input, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const ModifyPwd = () => {

  const dispatch = useDispatch();

  const [oldPwd,setOldPwd] = useState("");
  const [newPwd,setNewPwd] = useState("");
  const [confirmPwd,setConfirmPwd] = useState("");
  const [inputNewPwd,setInputNewPwd] = useState(false);
  const [inputConfirmPwd,setInputConfirmPwd] = useState(false);

  const changeOldPwd = (e) => {setOldPwd(e.target.value)};
  const changeNewPwd = (e) => {setNewPwd(e.target.value)};
  const changeConfirmPwd = (e) => {setConfirmPwd(e.target.value)};
  const focusNewPwd = () => {setInputNewPwd(true)};
  const blurNewPwd = () => {setInputNewPwd(false)};
  const focusConfirmPwd = () => {setInputConfirmPwd(true)};
  const blurConfirmPwd = () => {setInputConfirmPwd(false)};
  const sendNewPwd = ()=> {
    if ( oldPwd ===""|| newPwd ===""|| confirmPwd ===""){
      window.alert("모든 칸을 빠짐없이 입력해주세요!")
    }else{
      dispatch(userActions.modifyPwdDB(oldPwd,newPwd,confirmPwd));
    }
  }

  return (
    <Container>
      <Head>
        <Grid width="auto" _onClick={()=> {history.replace("/userinfo")}}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </Grid>
          <Text center>비밀번호 변경</Text>
      </Head>
      <TextInput>
          <label>현재 비밀번호</label>
          <input type="password" placeholder="현재 비밀번호" value={oldPwd} onChange={changeOldPwd}></input>
      </TextInput> 
      <TextInput>
          <label>새 비밀번호</label>
          <input type="password" placeholder="새 비밀번호" value={newPwd} onChange={changeNewPwd} onFocus={focusNewPwd} onBlur={blurNewPwd}></input>
          <p style={{display: inputNewPwd? null: "none", marginBottom:"0px"}}>8~16자 이내의 영어 대소문자, 숫자, 특수문자(!@#$%^*_-)를 모두 사용하여 조합</p>
          <input type="password" placeholder="새 비밀번호 확인" value={confirmPwd} onChange={changeConfirmPwd} onFocus={focusConfirmPwd} onBlur={blurConfirmPwd}></input>
          <p style={{display: inputConfirmPwd? (newPwd===confirmPwd ? "none": null ): "none", color:"#b80a45"}}>새 비밀번호와 일치하지 않습니다.</p>
      </TextInput>
      <Button width="calc(100% - 80px)" margin="40px" _onClick={()=>{sendNewPwd()}}>변경하기</Button> 
    </Container>  
  )
}

export default ModifyPwd;

const Container = styled.div`
  height: inherit;
  padding: 15.5% 0;
  button:last-child {
    position: absolute;
    top: 80%;
  }
  box-sizing: border-box;
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