import React ,{useEffect}from "react";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { history } from "../redux/configStore";
import {Button, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { actionCreators as profileActions } from "../redux/modules/profile";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as walkActions } from "../redux/modules/walk";
import Nav from "../components/Nav";
import moment from "moment-timezone";
import { petimage_bg, profile_edit, profile_cake } from "../static/images";

const Profile = () => {
  
  const dispatch = useDispatch();

  const petInfo = useSelector((state)=> state.profile.pet);
  const is_login = useSelector((state) => state.user.is_login);
  const walkList = useSelector((state) => state.walk.walkList);
  const user = useSelector((state) => state.user.user);

  const lastWalk = [];
  for(let i=0; i<2; i++){
    if (walkList[i]) {lastWalk.push(walkList[i])}
    else break;
  }

  useEffect(()=>{
    dispatch(walkActions.WalkListDB())
    dispatch(profileActions.getPetDB())
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
        <ProfileWrap>
          <ProfileCard>
            <PetImg style={{backgroundImage:`url(${petInfo.petImage})`}}></PetImg>
            <NameFrame>
              <p>{petInfo.petName}</p>
              <img src={profile_edit} alt="펫 프로필 수정 아이콘" onClick={()=> {history.replace("/profilewrite");}} />
            </NameFrame>
            <PetDetail>
              <span>성별</span>
              <p>{petInfo.petGender}</p>
              <span> |</span>
              <p>{petInfo.petBreed}</p>
            </PetDetail>
            <PetBirth>
              <img src={profile_cake} alt="생년월일 케이크 이미지" />
              <p>{petInfo.petBirth}</p>
            </PetBirth>
          </ProfileCard>
          <BtnBox style={{paddingBottom:"20px"}}>
            <p>최근 산책 내역</p>
            <FontAwesomeIcon icon={faAngleRight} onClick={()=> {history.replace("/walklist")}}/>
          </BtnBox>
            {!lastWalk[0] ? 
              <LastWalk style={{display: "block", textAlign:"center", lineHeight: "30px"}}>
                <p>산책 내역이 없어요</p>
                <p>첫 산책을 시작해주세요!</p>
              </LastWalk>
            : 
            <div>
              {lastWalk && (lastWalk.map((e,i) => {
                const at = (moment.tz(e.createdAt,'Asia/seoul').format('A')==="AM"? "오전 " : "오후 ")
                return(
              <LastWalk key={i} onClick={()=> {history.replace(`/walkdetail/${e._id}`)}}>
                <p>{moment.tz(e.createdAt,'Asia/seoul').format('YYYY / MM / DD')}</p>
                <p>{at+moment.tz(e.createdAt,'Asia/seoul').format('h:mm')}</p>
              </LastWalk>
              )}))}
            </div>
            }
          {user && (user.email ?
            <BtnBox>
              <p>회원 정보</p>
              <FontAwesomeIcon icon={faAngleRight} onClick={()=> {history.replace("/userinfo")}}/>
            </BtnBox>
          : null)}
          <LogoutBtn onClick={()=> {LogOut()}}>로그아웃</LogoutBtn>
        </ProfileWrap>
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
        <ProfileWrap>
          <ProfileCard>
            <PetImg></PetImg>
            <Text margin="20px 0">반려견 정보가 없습니다!</Text>
            <BtnBox style={{textAlign:"center", border: "2px solid #ffd04c",margin: "20px 20px 30px",paddingBottom:"20px"}} onClick={()=> {history.replace("/profilewrite")}}>
              <p>펫 프로필 등록하기</p>
              <FontAwesomeIcon icon={faAngleRight}/>
            </BtnBox>
            {user && (user.email?
              <BtnBox>
                <p>회원 정보</p>
                <FontAwesomeIcon icon={faAngleRight} onClick={()=> {history.replace("/userinfo")}}/>
              </BtnBox>
            : null)}
            <LogoutBtn onClick={()=> {LogOut()}}>로그아웃</LogoutBtn>
          </ProfileCard>
        </ProfileWrap>
        <Nav></Nav>
      </ProfileContainer>
    )
  }else{
    return(
      <ProfileContainer>
        <NotList>
          <p>로그인이 필요한 서비스입니다.</p>
          <p>로그인 후 이용해주세요.</p>
          <Button margin= "58px 0 0" _onClick={()=> {history.replace("/login")}} text="로그인하기"></Button>
        </NotList>
        <Nav></Nav>
      </ProfileContainer>
    )
  }
}

export default Profile;

const ProfileContainer = styled.div`
  position: relative;
  height: inherit;
`;
const HeadColor = styled.div`
  height: 257px;
  margin: 0px 0px -168px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bg};
`;
const Head = styled.div`
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 54px ${({ theme }) => theme.paddings.lg} 0;
  &::after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }
  & > div {
    float: left;
  }
  & > p {
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeight.lg};
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray_4};
  }
`;
const ProfileWrap = styled.div`
  padding: 100px 30px 0px;
  height: calc(100% - 284px); 
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ProfileCard = styled.div`
  position: relative;
  height: 135px;
  padding: 70px 0px 0px;
  border-radius: 13px;
  box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
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
  border: 10px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url(${petimage_bg});
`;
const NameFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    margin: ${({ theme }) => theme.margins.base} 0;
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    text-indent: 34px;
  }
  img {
    cursor: pointer;
    margin: 0 0 0 10px;
  }
`;

const PetDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.margins.base};;
  span {
    font-size: 13px;
    margin: ${({ theme }) => theme.margins.base} 5px;
    color: #c4c4c4;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 5px;
  }
`;

const PetBirth = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin: 3px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const LastWalk = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.xxl} ${({ theme }) => theme.paddings.lg};
  box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 13px;
  margin-bottom: ${({ theme }) => theme.margins.base};;
  cursor: pointer;
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray_4};
  }
  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.gray_2};
  }
`;
const BtnBox = styled.div`
  padding: ${({ theme }) => theme.paddings.xxl};
  font-size: ${({ theme }) => theme.fontSizes.base};
  border-radius: 13px;
  color: ${({ theme }) => theme.colors.gray_4};
  display: flex;
  justify-content: space-between;
  svg {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.gray_3};
    cursor: pointer;
  }
`;
const LogoutBtn = styled.div`
  color: ${({ theme }) => theme.colors.gray_4};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin: ${({ theme }) => theme.margins.xl} ${({ theme }) => theme.margins.xxxxl} 54px;
  text-align: left;
  cursor: pointer;
`;
const NotList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -82%);
  width: calc(100% - 60px);
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_2};
`;
