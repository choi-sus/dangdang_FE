import React from "react";
import {Button, Grid, Input, Text} from "../elements/Index"
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"

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

    return(
        <React.Fragment>
            <Grid>
                { idFind === true ? <Text bold>아이디 찾기</Text> : <Text _onClick={()=> setIdFind(true)}>아이디 찾기</Text>}
                { idFind === true ? <Text _onClick={()=> setIdFind(false)}>비밀번호 찾기</Text> : <Text bold>비밀번호 찾기</Text>}
            </Grid>
            <Grid>
                {
                    idFind === true ?
                    <Grid>
                        <Text>댕댕한바퀴에 가입한 이메일을 입력해 주세요. 가입한 아이디를 메일로 보내드립니다.</Text>
                        <Input placeholder="이메일을 입력해주세요." _onChange={(e)=> {setMail(e.target.value);}}></Input>
                        <Button _onClick={idFined} text="보내기"></Button>
                    </Grid>
                    : <Grid>
                        <Text>댕댕한바퀴에 가입한 아이디, 이메일을 입력해 주세요. 가입한 비밀번호를 메일로 보내드립니다.</Text>
                        <Input placeholder="이메일을 입력해주세요." _onChange={(e)=> {setMail(e.target.value);}}></Input>
                        <Input placeholder="아이디를 입력해주세요." _onChange={(e)=> {setId(e.target.value);}}></Input>
                        <Button _onClick={pwdFined} text="보내기"></Button>
                    </Grid>
                }
            </Grid>
        </React.Fragment>
    )
}

export default UserFind