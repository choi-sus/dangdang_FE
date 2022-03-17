import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {history} from "../redux/configStore"
import {Button, Grid, Input, Text} from "../elements/Index"

const Header = ()=> {
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    const is = useSelector((state) => state.user);

    if(is_login){
        return(
            <React.Fragment>
                <Head>
                    <h1 onClick={()=> {history.push("/");}}>logo</h1>
                    <div>
                        <Button _onClick={()=> {dispatch(userActions.logOut());}} text="로그아웃" width="100px" padding="10px 0" font-size="15px"></Button>
                    </div>
                </Head>
            </React.Fragment>  
        ) 
    }
    return(
        <React.Fragment>
            <Head>
                <h1 onClick={()=> {history.push("/");}}>logo</h1>
                <div>
                    <Button _onClick={()=> {history.push("/login");}} text="로그인" width="100px" padding="10px 0" font-size="15px"></Button>
                    <Button _onClick={()=> {history.push("/signup");}} text="회원가입" width="100px" padding="10px 0" font-size="15px" margin="0 0 0 10px"></Button>
                </div>
            </Head>
        </React.Fragment>       
    )
}

const Head = styled.div`
    background-color: #000;
    padding: 20px 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    h1{
        margin: 0; font-size: 30px; color: #fff; cursor: pointer;
    }
`

export default Header