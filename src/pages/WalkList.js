import React ,{useEffect, useState}from "react";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import {Button, Grid, Input, Text} from "../elements/Index"
import { history } from "../redux/configStore";
import { actionCreators as walkActions } from "../redux/modules/walk";
import { actionCreators as profileActions } from "../redux/modules/profile";
import Nav from "../components/Nav";
import moment from "moment-timezone";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(walkActions.WalkListDB())
    dispatch(profileActions.getPetDB())
  },[])
  const walkList = useSelector((state)=> state.walk.walkList)
  const petImage = useSelector((state)=> state.profile.pet.petImage)
  const is_login = useSelector((state) => state.user.is_login);
  if(!walkList[0]){
    return(
      <ListContainer>
          <Head>
            <Text center color="#4F4F4F" size="18px">산책 일지</Text> 
          </Head>
          {is_login ? 
          <NotList>
            <p>반려견과 함께한 산책기록이 없으시군요?</p>
            <p>지금 산책하러 갈까요?</p>
            <Button margin="30px 0 0" width="35%" _onClick={()=> {history.replace("/main")}} text="산책하러 가기"></Button>
          </NotList>
          : 
          <NotList>
            <p>로그인 또는 회원가입이 필요한 서비스입니다.</p>
            <Button margin="30px 0 0" width="35%" _onClick={()=> {history.replace("/login")}} text="로그인하기"></Button>
          </NotList>
          }
          
          
          <Nav/>
     </ListContainer>
  )
  }else{
    return(
      <ListContainer>
          <Head>
            <Text center color="#4F4F4F" size="18px">산책 일지</Text>
          </Head>
          <ListWrap>
          {walkList.map((e,i) => {
            const at = (moment.tz(e.createdAt,'Asia/seoul').format('A')==="AM"? "오전 " : "오후 ")
            return(
              <WalkCard key={i} onClick={()=>{history.replace(`/walkdetail/${e._id}`)}}>
                <h5>{moment.tz(e.createdAt,'Asia/seoul').format('YYYY.MM.DD')}</h5>
                <p>{at+moment.tz(e.createdAt,'Asia/seoul').format('h:mm')}</p>
                <PetImg style={{backgroundImage:`url(${petImage})`}}></PetImg>
              </WalkCard> 
            )
          })}
          </ListWrap>
          <Nav/>
     </ListContainer>
  )
  }
}

export default Profile;

const ListContainer = styled.div`
position: relative;
background-color: #FFFBF1;
width: 100vW;
height: 100vh;
padding: 54px 0 0;
box-sizing: border-box;
`;
const Head = styled.div`
  margin-bottom: 25px;
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
const NotList = styled.div`
  text-align: center;
  color:#bdbdbd;
  height: 300px;
  padding: 100px 0;
`;
const ListWrap = styled.div`
  height: 90%;
  overflow: scroll;
`;
const WalkCard = styled.div`
height: 52px;
height: calc(100%-92px);
background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(158, 158, 158, 0.25);
border-radius: 11px;
margin:0 16px 13px;
padding: 16px;
position: relative;
cursor: pointer;
h5{
  font-size: 18px;
  margin: 0px;
  font-weight: 400;
  span{
    font-size: 14px;
  color: #bdbdbd;
  margin: 5px 0px 5px 10px;
  }
}
p{
  font-size: 16px;
  color: #bdbdbd;
  margin: 10px 0px;
}
`;
const PetImg = styled.div`
width: 56px;
height: 56px;
border-radius: 50%;
background-image: url("img/profile.PNG");
background-size: cover;
position: absolute;
right: 16px;
top: 13px;
`;