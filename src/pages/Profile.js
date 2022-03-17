import React ,{useEffect, useState}from "react";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import {Button, Grid, Input, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { actionCreators as profileActions } from "../redux/modules/profile";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as walkActions } from "../redux/modules/walk";
import Nav from "../components/Nav";
import moment from "moment-timezone";

const Profile = () => {
  const dispatch = useDispatch();
  const petInfo = useSelector((state)=> state.profile.pet);
  const is_login = useSelector((state) => state.user.is_login);
  const lastWalk = useSelector((state) => state.walk.walkList[0]);

  useEffect(()=>{
    dispatch(profileActions.getPetDB())
    dispatch(walkActions.WalkListDB())
  },[])
  
  const LogOut = () => {
    dispatch(userActions.logOut());
    history.replace("/login")
  }

  if(petInfo){
      return(
        <ProfileContainer>
          <HeadColor>
          <Head>
            <Text center color="#4F4F4F" size="18px">펫 프로필</Text>
          </Head>
          </HeadColor>
          <ProfileCard>
            <PetImg style={{backgroundImage:`url(${petInfo.petImage})`}}></PetImg>
              <PetName>{petInfo.petName}</PetName>
              <PetDetail>
                <span>성별</span>
                <p>{petInfo.petGender}</p>
                <span> |</span>
                <p>{petInfo.petBreed}</p>
              </PetDetail>
              <PetBirth>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0.9375L11.3903 1.8285C11.3903 1.8285 10.986 2.39325 10.5938 3.0705C10.3973 3.41025 10.2128 3.765 10.0545 4.125C9.89701 4.485 9.75001 4.8165 9.75001 5.25C9.75001 6.48375 10.7663 7.5 12 7.5C13.2338 7.5 14.25 6.48375 14.25 5.25C14.25 4.8165 14.1038 4.485 13.9455 4.125C13.7873 3.765 13.6028 3.41025 13.4063 3.0705C13.014 2.39325 12.609 1.82775 12.609 1.82775L12 0.9375ZM12 7.5H9.75001V10.5H5.25001C3.59251 10.5 2.25001 11.8425 2.25001 13.5C2.24813 14.2334 2.51494 14.942 3.00001 15.492V21H21V15.492C21.4851 14.942 21.7519 14.2334 21.75 13.5C21.75 11.8425 20.4075 10.5 18.75 10.5H14.25V7.5H12ZM12 3.65625C12.0495 3.73875 12.0443 3.73275 12.0938 3.8205C12.2723 4.128 12.4628 4.45575 12.5858 4.734C12.7088 5.013 12.75 5.27025 12.75 5.25C12.75 5.66625 12.4163 6 12 6C11.5838 6 11.25 5.66625 11.25 5.25C11.25 5.27025 11.2913 5.013 11.4143 4.734C11.5373 4.4565 11.7278 4.128 11.9063 3.8205C11.9558 3.73275 11.9505 3.738 12 3.65625ZM11.25 9H12.75V10.5H11.25V9ZM5.25001 12H18.75C19.6433 12 20.25 12.6068 20.25 13.5C20.25 14.3932 19.6433 15 18.75 15C17.8568 15 17.25 14.3932 17.25 13.5H15.75C15.75 14.3932 15.1433 15 14.25 15C13.3568 15 12.75 14.3932 12.75 13.5H11.25C11.25 14.3932 10.6433 15 9.75001 15C8.85676 15 8.25001 14.3932 8.25001 13.5H6.75001C6.75001 14.3932 6.14326 15 5.25001 15C4.35676 15 3.75001 14.3932 3.75001 13.5C3.75001 12.6068 4.35676 12 5.25001 12ZM7.50001 15.492C7.78193 15.8102 8.12841 16.0647 8.51638 16.2385C8.90434 16.4123 9.32489 16.5014 9.75001 16.5C10.1751 16.5014 10.5957 16.4123 10.9836 16.2385C11.3716 16.0647 11.7181 15.8102 12 15.492C12.2819 15.8102 12.6284 16.0647 13.0164 16.2385C13.4043 16.4123 13.8249 16.5014 14.25 16.5C14.6751 16.5014 15.0957 16.4123 15.4836 16.2385C15.8716 16.0647 16.2181 15.8102 16.5 15.492C16.7819 15.8102 17.1284 16.0647 17.5164 16.2385C17.9043 16.4123 18.3249 16.5014 18.75 16.5C19.011 16.5 19.26 16.4445 19.5 16.383V19.5H4.50001V16.383C4.74001 16.4445 4.98901 16.5 5.25001 16.5C5.67513 16.5014 6.09568 16.4123 6.48364 16.2385C6.87161 16.0647 7.21809 15.8102 7.50001 15.492Z" fill="#FFD04C"/>
                </svg>
                <p>{petInfo.petBirth}</p>
              </PetBirth>
            </ProfileCard>
              <LastWalk>
                <LastTitle>
                  <h4>최근 산책 내역</h4>
                  <FontAwesomeIcon icon={faAngleRight} onClick={()=> {history.replace(`/walkdetail/${lastWalk?._id}`)}}/>
                </LastTitle>
                {!lastWalk ? 
                  <div>
                    <p>산책 내역이 없어요</p>
                    <p>첫 산책을 시작해주세요!</p>
                  </div>
                : 
                  <div>
                    <p>날짜 {moment.tz(lastWalk.createdAt,'Asia/seoul').format('YYYY.MM.DD A h:mm')}</p>
                    <p>시간 {lastWalk.time}</p>
                    <p>거리 {lastWalk.distance}km</p>
                  </div>
                }
              </LastWalk>
              <BtnBox>
                {petInfo ? <p>펫 프로필 수정하기</p> : <p>펫 프로필 추가하기</p>}
                <FontAwesomeIcon icon={faAngleRight} onClick={()=> {history.replace("/profilewrite")}}/>
              </BtnBox>
              <LogoutBtn onClick={()=> {LogOut()}}>로그아웃</LogoutBtn>
              <Nav></Nav>
       </ProfileContainer>
    )
    }else if(!petInfo && is_login){
      return(
      <ProfileContainer>
          <HeadColor>
            <Head>
              <Text center color="#4F4F4F" size="18px">펫 프로필</Text>
            </Head>
            </HeadColor>
          <ProfileCard>
            <PetImg></PetImg>
            <p>반려견 정보가 없습니다!</p>
            <BtnBox style={{textAlign:"center", border: "2px solid #ffd04c",margin: "30px"}} onClick={()=> {history.replace("/profilewrite")}}>
              <p>나의 반려견 정보 입력하기</p>
              <FontAwesomeIcon icon={faAngleRight}/>
            </BtnBox>
            <LogoutBtn onClick={()=> {LogOut()}}>로그아웃</LogoutBtn>
          </ProfileCard>
          <Nav></Nav>
       </ProfileContainer>
      )
    }else{
      return(
        <ProfileContainer>
            <HeadColor>
              <Head>
                <Text center color="#4F4F4F" size="18px">펫 프로필</Text>
              </Head>
              </HeadColor>
            <ProfileCard>
              <PetImg></PetImg>
              <p>로그인 후 반려견 정보를 확인해주세요!</p>
              <BtnBox style={{textAlign:"center", border: "2px solid #ffd04c",margin: "30px"}} onClick={()=> {history.replace("/login")}}>
                <p>로그인 페이지로 이동</p>
                <FontAwesomeIcon icon={faAngleRight}/>
              </BtnBox>
            </ProfileCard>
            <Nav></Nav>
         </ProfileContainer>
        )
    }
}

export default Profile;

const ProfileContainer = styled.div`
width: 100vW;
height: 100vh;
background-color: #FFFBF1;
box-sizing: border-box;
padding: 0 30px;
  h2 {
    font-size: 30px;
    line-height: 35px;
    color: #4F4F4F;
    margin: 60px 0 30px;
  }
`;
const HeadColor = styled.div`
height: 257px;
margin: 0px -30px -68px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
background: #FFE7A5;
`;
const Head = styled.div`
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 54px 4.35% 0;
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
const ProfileCard = styled.div`
  position: relative;
  height: 150px;
  padding: 70px 0px 0px;
  border-radius: 13px;
  box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
  background-color: #fff;
  text-align: center;
  z-index: 5;
`;
const PetImg = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -95%);
  width: 147px;
  height: 147px;
  border-radius: 50%;
  background-size: cover;
  border: 10px solid #FFFFFF;
  background-color: #FFFFFF;
  background-image: url('img/profile.PNG');
`;
const PetName = styled.div`
  font-size: 24px;
  margin: 10px;
`;

const PetDetail = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
span{
  font-size: 13px;
  margin: 10px 5px;
  color: #c4c4c4;
}
p{
  font-size: 18px;
  margin: 5px;
}
`;

const PetBirth = styled.div`
  display: flex;
  justify-content: center;
  p{
    margin: 3px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const LastWalk = styled.div`
height: 140px;
margin: 15px 0px;
padding: 20px;
box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
background-color: #fff;
border-radius: 13px;
p{
  font-size: 16px;
  color: #bdbdbd;
}
`;
const LastTitle = styled.div`
display: flex;
justify-content: space-between;
h4{
  margin:0px;
  font-size: 16px;
  text-align: left;
  color: #4f4f4f;
}
svg{
  font-size: 20px;
    color: #828282;
}
`;
const BtnBox = styled.div`
  margin: 0 0 15px;
  padding: 19px 20px;
  box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
  background-color: #ffffff;
  font-size: 16px;
  border-radius: 13px;
  color: #4f4f4f;
  display: flex;
  justify-content: space-between;
  p {
    margin:0px;
  }
  svg{
  font-size: 20px;
    color: #828282;
  }
`;
const LogoutBtn = styled.div`
  color: #828282;
  font-size: 16px;
  text-align: right;
  margin-right: 30px;
`;