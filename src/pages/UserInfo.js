import React,{useEffect} from "react";
import styled from "styled-components";
import {Button, Grid, Input, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const dispatch = useDispatch();
    useEffect(() => {
          dispatch(userActions.loginCheckDB());
    }, []);
    const user = useSelector((state)=> state.user.user);
    return (
        <UserContainer>
          <Head>
            <Grid width="auto" _onClick={()=> {history.replace("/profile")}}>
              <FontAwesomeIcon icon={faAngleLeft}/>
            </Grid>
              <Text center color="#4F4F4F" size="18px">회원정보</Text>
          </Head>
          <InfoWrap>
              <div>
                  <p>아이디</p>
                  <p>{user && user.userID}</p>
              </div>
              <div>
                  <p>이메일</p>
                  <p>{user && user.email}</p>
              </div>
              <div>
                  <p>닉네임</p>
                  <p>{user && user.nickname}</p>
              </div>
              <div>
                <p>닉네임 변경하기</p>
                {user && (
                <Link to={{pathname:'/modifynick', state:{nickname:user.nickname}}}>
                <FontAwesomeIcon icon={faAngleRight}/>
                </Link>
                )}
                <p>비밀번호 변경하기</p>
                <FontAwesomeIcon icon={faAngleRight} onClick={()=> {history.replace("/modifypwd")}}/>
              </div>
          </InfoWrap>
        </UserContainer>
    )
}

export default UserInfo;

const UserContainer = styled.div`
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
const InfoWrap = styled.div`
  padding: 0 30px;
  div{
      display: flex;
  }
  p:nth-child(1){
    width: 85px;
    color: #828282;
    }
  div:nth-child(4){
    font-size: 16px;
    border-radius: 13px;
    color: #4f4f4f;
    display: flex;
    text-align: right;
    justify-content: flex-end;
    padding: 18px 0px;
  p{
    width: 150px;
    margin: 0px;
    color: #828282;
  }
  svg{
    font-size: 20px;
    color: #828282;
    margin: 0px 0px 0px 10px;
  }
  }
`;