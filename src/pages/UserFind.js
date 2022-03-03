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

    const style = {color: "#BDBDBD"}

    return(
        <FindContainer>
            <Head>
              <Grid width="auto" _onClick={()=> {history.replace("/login")}}>
                <FontAwesomeIcon icon={faAngleLeft}/>
              </Grid>
              <Text center color="#4F4F4F" size="18px">아이디/비밀번호 찾기</Text>
            </Head>
            <Grid margin="0 0 65px 0" is_start>
                { idFind === true ? <h2>아이디</h2> : <h2 style={style} onClick={()=> setIdFind(true)}>아이디</h2>}
                { idFind === true ? <h2 style={style} onClick={()=> setIdFind(false)}>비밀번호</h2> : <h2>비밀번호</h2>}
            </Grid>
            <Grid>
                {
                    idFind === true ?
                    <Grid>
                        <Text margin="0 0 45px 0" bold size="18px">댕댕한바퀴에 가입한 이메일을 입력해 주세요. <br></br> 가입한 아이디를 메일로 보내드립니다.</Text>
                        <Input margin="0 0 65px 0" placeholder="이메일을 입력해주세요." _onChange={(e)=> {setMail(e.target.value);}}></Input>
                        <Button _onClick={idFined} text="보내기"></Button>
                    </Grid>
                    : <Grid>
                        <Text margin="0 0 45px 0" bold size="18px">댕댕한바퀴에 가입한 아이디, 이메일을 입력해 주세요. <br></br> 가입한 비밀번호를 메일로 보내드립니다.</Text>
                        <Input margin="0 0 25px 0" placeholder="이메일을 입력해주세요." _onChange={(e)=> {setMail(e.target.value);}}></Input>
                        <Input margin="0 0 65px 0" placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
                        <Button _onClick={pwdFined} text="보내기"></Button>
                    </Grid>
                }
            </Grid>
        </FindContainer>
    )
}

export default UserFind

const FindContainer = styled.div`
    padding: 10px 5% 0;
    h2 {
      font-size: 28px;
      margin: 0;
    }
    h2:last-child{
        margin-left: 10px;
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