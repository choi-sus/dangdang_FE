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
    const [checkedInputs, setCheckedInputs] = useState([]);
    const [inputId,setInputId] = useState(false);
    const [inputEmail,setInputEmail] = useState(false);
    const [inputNick,setInputNick] = useState(false);
    const [inputPwd,setInputPwd] = useState(false);
    const [inputConfirmPwd,setInputConfirmPwd] = useState(false);

    const changeHandler = (checked, id) => {
      if (checked) {
        setCheckedInputs([...checkedInputs, id]);
      } else {
        setCheckedInputs(checkedInputs.filter(el => el !== id));
      }
    };

    const focusId = () => {setInputId(true)}
    const blurId = () => {setInputId(false)}
    const focusEmail = () => {setInputEmail(true)}
    const blurEmail = () => {setInputEmail(false)}
    const focusNick = () => {setInputNick(true)}
    const blurNick = () => {setInputNick(false)}
    const focusPwd = () => {setInputPwd(true)}
    const blurPwd = () => {setInputPwd(false)}
    const focusConfirmPwd = () => {setInputConfirmPwd(true)}
    const blurConfirmPwd = () => {setInputConfirmPwd(false)}

    const isAllChecked = checkedInputs.length === 2;

    const signup = () => {
        if (!isAllChecked){
          window.alert("수집 동의를 해야 회원가입이 완료됩니다.");
          return;
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
          <SignContent>
            <ContentTitle>회원가입</ContentTitle>
            <Grid height="auto">
              <Input margin="0px" value={id} _onChange={(e)=>{setId(e.target.value)}} type="text" placeholder="아이디" _onFocus={() => {focusId()}} _onBlur={()=>{blurId()}}></Input>
              <p style={{display: inputId? null: "none"}}>2~10자 이내의 영어 대소문자, 숫자 조합</p>
              <Input margin="15px 0 0" value={email} _onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="이메일" _onFocus={() => {focusEmail()}} _onBlur={()=>{blurEmail()}}></Input>
              <p style={{display: inputEmail? null: "none"}}>(예)denglove@dengdeng.com</p>
              <Input margin="15px 0 0" value={nickname} _onChange={(e)=>{setNickname(e.target.value)}} type="text" placeholder="닉네임" _onFocus={() => {focusNick()}} _onBlur={()=>{blurNick()}}></Input>
              <p style={{display: inputNick? null: "none"}}>2~10자 이내의 한글, 영문자 조합(특수문자 제외)</p>
              <Input margin="15px 0 0" value={pwd} _onChange={(e)=>{setPwd(e.target.value)}} type="password" placeholder="비밀번호" _onFocus={() => {focusPwd()}} _onBlur={()=>{blurPwd()}}></Input>
              <p style={{display: inputPwd? null: "none"}}>8~16자 이내의 영어 대소문자, 숫자, 특수문자(!@#$%^*_-)를 모두 사용하여 조합</p>
              <Input margin="15px 0 0" value={confirmPwd} _onChange={(e)=>{setConfirmPwd(e.target.value)}} type="password" placeholder="비밀번호 확인" _onFocus={() => {focusConfirmPwd()}} _onBlur={()=>{blurConfirmPwd()}}></Input>
              <p style={{display: inputConfirmPwd? (pwd===confirmPwd ? "none": null ): "none",color:"b80a45"}}>비밀번호가 일치하지 않습니다.</p>
            </Grid>
            <Grid margin="30px 0 130px 0" height="auto">
              <InputContent>
              <input type="checkbox" id="check" onChange={e => {changeHandler(e.currentTarget.checked, 'check');}} checked={checkedInputs.includes('check') ? true : false}></input>
              <label id="check" htmlFor="check"></label>
              <span>개인정보 수집동의</span>
              </InputContent>
              <InputContent>
              <input type="checkbox" id="check2" onChange={e => {changeHandler(e.currentTarget.checked, 'check2');}} checked={checkedInputs.includes('check2') ? true : false}></input>
              <label id="check2" htmlFor="check2"></label>
              <span>마케팅 수신동의</span>
              </InputContent>
            </Grid>            
            <Button _onClick={()=>{signup();}} text="가입하기"></Button>
          </SignContent>
        </SignContainer>
    )
}

export default SignUp

const SignContainer = styled.div`
  height: 100vh;
  background-color: #FFFBF1;
  padding: 15.5% 0;
  box-sizing: border-box;
  @media screen and (min-height: 0) and (max-height: 800px){
    height: auto;
  }
`
const Head = styled.div`
  padding: 0 4.35%;
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
`

const ContentTitle = styled.h2`
  font-size: 30px;
  line-height: 35px;
  color: #4F4F4F;
  margin: 60px 0 30px;
`

const SignContent = styled.div`
  padding: 0 10.25%;
  box-sizing: border-box;
  p{
    margin: 5px 16px 0px;
    color: #828282;
    font-size:12px;
  }
`

const InputContent = styled.div`
&:first-child {
  margin: 0 0 10px 20px;
}
&:last-child {
  margin-left: 20px;
}
&::after {
  content: ""; display: block; visibility: hidden; clear: both;
}
input[type="checkbox"]{
  display: none;
}
input[type="checkbox"] + label{
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid #FFD04C;
  position: relative;
  margin-right: 20px;
  float: left;
  box-sizing: border-box;
}
input[id="check"]:checked + label::after,
input[id="check2"]:checked + label::after{
  content:'✔';
  font-size: 20px;
  width: 24px;
  height: 24px;
  text-align: center;
  position: absolute;
  left: -2px;
  top: -4px;
  color: #FFD04C;
}
span{
  display: block;
  color: #FFD04C;
  float: left;
  line-height: 24px;
}
`