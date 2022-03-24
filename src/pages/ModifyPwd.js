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
  const sendNewPwd = ()=> {
      dispatch(userActions.modifyPwdDB(oldPwd,newPwd,confirmPwd));
      history.replace("/userinfo");
  }
  const focusNewPwd = () => {setInputNewPwd(true)};
  const blurNewPwd = () => {setInputNewPwd(false)};
  const focusConfirmPwd = () => {setInputConfirmPwd(true)};
  const blurConfirmPwd = () => {setInputConfirmPwd(false)};
    return (
        <Container>
          <Head>
            <Grid width="auto" _onClick={()=> {history.replace("/userinfo")}}>
              <FontAwesomeIcon icon={faAngleLeft}/>
            </Grid>
              <Text center color="#4F4F4F" size="18px">비밀번호 변경</Text>
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
          <Button width="80%" margin="40px" _onClick={()=>{sendNewPwd()}}>변경하기</Button>

        </Container>  
    )
}

export default ModifyPwd;
const Container = styled.div`
background-color: #FFFBF1;
height: 100vh;
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
    color: #828282;
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