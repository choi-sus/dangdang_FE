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
            <Text center>회원가입</Text>
          </Head>
          <SignContent>
            <ContentTitle>회원가입</ContentTitle>
            <Grid height="auto">
              <Input margin="0px" value={id} _onChange={(e)=>{setId(e.target.value)}} type="text" placeholder="아이디" _onFocus={() => {focusId()}} _onBlur={()=>{blurId()}}></Input>
              <p style={{display: inputId? null: "none"}}>2~10자 이내의 영어 대소문자, 숫자 조합</p>
              <Input margin="15px 0 0" value={email} _onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="이메일" _onFocus={() => {focusEmail()}} _onBlur={()=>{blurEmail()}}></Input>
              <p style={{display: inputEmail? null: "none"}}>이메일 형식 deng@denground.com</p>
              <Input margin="15px 0 0" value={nickname} _onChange={(e)=>{setNickname(e.target.value)}} type="text" placeholder="닉네임" _onFocus={() => {focusNick()}} _onBlur={()=>{blurNick()}}></Input>
              <p style={{display: inputNick? null: "none"}}>2~10자 이내의 한글, 영문자 조합(특수문자 제외)</p>
              <Input margin="15px 0 0" value={pwd} _onChange={(e)=>{setPwd(e.target.value)}} type="password" placeholder="비밀번호" _onFocus={() => {focusPwd()}} _onBlur={()=>{blurPwd()}}></Input>
              <p style={{display: inputPwd? null: "none"}}>8~16자 이내의 영어 대소문자, 숫자, 특수문자(!@#$%^*_-)를 모두 사용하여 조합</p>
              <Input margin="15px 0 0" value={confirmPwd} _onChange={(e)=>{setConfirmPwd(e.target.value)}} type="password" placeholder="비밀번호 확인" _onFocus={() => {focusConfirmPwd()}} _onBlur={()=>{blurConfirmPwd()}}></Input>
              <p style={{display: inputConfirmPwd? (pwd===confirmPwd ? "none": null ): "none",color:"#b80a45"}}>비밀번호가 일치하지 않습니다.</p>
            </Grid>
            <Grid margin="30px 0 50px;" height="auto">
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
  padding: 15.5% 0;
  box-sizing: border-box;
  height: inherit;
  overflow-y: scroll;

  &::-webkit-scrollbar {
      display: none;
  }
`
const Head = styled.div`
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
  svg{
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.gray_4};
    cursor: pointer;
  }
`

const ContentTitle = styled.h2`
  font-size: 30px;
  line-height: ${({ theme }) => theme.lineHeight.xxxl};
  color: ${({ theme }) => theme.colors.gray_4};
  margin: 45px 0 35px;
`

const SignContent = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.xxxxl};
  box-sizing: border-box;
  p{
    margin: 5px 16px 0px;
    color: ${({ theme }) => theme.colors.gray_3};
    font-size: ${({ theme }) => theme.fontSizes.ssmall};
  }
`

const InputContent = styled.div`
&:first-child {
  margin: 0 0 ${({ theme }) => theme.margins.base} ${({ theme }) => theme.margins.xxxxl};
}
&:last-child {
  margin-left: ${({ theme }) => theme.margins.xxxxl};
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
  border: 2px solid ${({ theme }) => theme.colors.main_2};
  position: relative;
  margin-right: ${({ theme }) => theme.margins.xxxxl};
  float: left;
  box-sizing: border-box; 
  cursor: pointer;
}
input[id="check"]:checked + label::after,
input[id="check2"]:checked + label::after{
  content:'✔';
  font-size: ${({ theme }) => theme.fontSizes.xl};
  width: 24px;
  height: 24px;
  text-align: center;
  position: absolute;
  left: -2px;
  top: 2px;
  color: ${({ theme }) => theme.colors.main_2};
}
span{
  display: block;
  color: ${({ theme }) => theme.colors.main_2};
  float: left;
  line-height: ${({ theme }) => theme.lineHeight.base};
}
`