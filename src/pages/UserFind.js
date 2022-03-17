import React from "react";
import styled from "styled-components"
import {Button, Grid, Input, Text} from "../elements/Index"
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";

const UserFind = () => {
    const dispatch = useDispatch();
    const [idFind, setIdFind] = React.useState(true);
    const [mail, setMail] = React.useState("");
    const [id, setId] = React.useState("");

    const idFined =()=>{
        dispatch(userActions.idFindDB(mail))
    }

    const pwdFined =()=>{
        dispatch(userActions.pwdFindDB(mail, id))
    }

    const style = {color: "#E0E0E0"}

    return(
        <FindContainer>
            <Head>
              <Grid width="auto" height="auto" _onClick={()=> {history.replace("/login")}}>
                <FontAwesomeIcon icon={faAngleLeft}/>
              </Grid>
              <Text center color="#4F4F4F" size="18px">아이디/비밀번호 찾기</Text>
            </Head>
            <FindContent>
              <Grid margin="0 0 60px 0" is_start height="auto">
                  { idFind === true ? <h2>아이디</h2> : <h2 style={style} onClick={()=> setIdFind(true)}>아이디</h2>}
                  { idFind === true ? <h2 style={style} onClick={()=> setIdFind(false)}>비밀번호</h2> : <h2>비밀번호</h2>}
              </Grid>
              <Grid height="auto">
                  {
                      idFind === true ?
                      <Grid height="auto">
                          <Text margin="0 0 30px 0" size="14px" color="#4F4F4F" height="25px">댕댕한바퀴에 가입한 정보를 입력해 주세요. <br></br> 가입한 아이디를 메일로 보내드립니다.</Text>
                          <Input margin="0 0 70px 0" placeholder="이메일을 입력해주세요." _onChange={(e)=> {setMail(e.target.value);}}></Input>
                          <Button _onClick={idFined} text="보내기"></Button>
                      </Grid>
                      : <Grid height="auto">
                          <Text margin="0 0 30px 0" size="14px" color="#4F4F4F" height="25px">댕댕한바퀴에 가입한 정보를 입력해 주세요. <br></br> 가입한 비밀번호를 메일로 보내드립니다.</Text>
                          <Input margin="0 0 15px 0" placeholder="이메일을 입력해주세요." _onChange={(e)=> {setMail(e.target.value);}}></Input>
                          <Input margin="0 0 70px 0" placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
                          <Button _onClick={pwdFined} text="보내기"></Button>
                      </Grid>
                  }
              </Grid>
            </FindContent>
        </FindContainer>
    )
}

export default UserFind

const FindContainer = styled.div`
    height: 100vh;
    background-color: #FFFBF1;
    padding: 15.5% 0;
    box-sizing: border-box;
    h2 {
      font-size: 30px;
      line-height: 35px;
      color: #FFD04C;
      margin: 0;
    }
    h2:last-child{
        margin-left: 10px;
    }
`
const Head = styled.div`
  margin-bottom: 60px;
  box-sizing: border-box;
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

const FindContent = styled.div`
  padding: 0 10.25%;
  box-sizing: border-box;
`