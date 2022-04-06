import React ,{useEffect}from "react";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import {Button, Text} from "../elements/Index"
import { history } from "../redux/configStore";
import { actionCreators as walkActions } from "../redux/modules/walk";
import { actionCreators as profileActions } from "../redux/modules/profile";
import Nav from "../components/Nav";
import moment from "moment-timezone";
import { petimage_bg } from "../static/images";

const WaliList = () => {
  
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
        {is_login ? 
          <NotList>
            <p>반려견과 함께한 산책기록이 없으시군요?</p>
            <p>지금 산책하러 갈까요?</p>
            <Button _onClick={()=> {history.replace("/main")}} text="산책하러 가기"></Button>
          </NotList>
        : 
          <NotList>
            <p>로그인이 필요한 서비스입니다.</p>
            <p>로그인 후 이용해주세요.</p>
            <Button  _onClick={()=> {history.replace("/login")}} text="로그인하기"></Button>
          </NotList>
        }
        <Nav></Nav>
     </ListContainer>
    )
  }else{
    return(
      <ListContainer>
        <Head>
          <Text>산책 일지</Text>
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
        <Nav></Nav>
     </ListContainer>
    )
  }
}

export default WaliList;

const ListContainer = styled.div`
  position: relative;
  height: inherit;
  padding: 54px 0 96px;
  box-sizing: border-box;
`;
const Head = styled.div`
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.paddings.lg};
  &::after {
    content: "";display: block; visibility: hidden; clear: both;
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
`;
const NotList = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -82%);
  padding: 0 30px;
  width: calc(100% - 60px);
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_2};
  p{
    line-height: ${({ theme }) => theme.lineHeight.xxxl};
  }
  button{
    margin: 50px 0 0;
  }
`;
const ListWrap = styled.div`
  height: calc(100% - 50px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const WalkCard = styled.div`
  height: 52px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 4px rgba(158, 158, 158, 0.25);
  border-radius: 11px;
  margin: 0 ${({ theme }) => theme.margins.xxl} 13px;
  padding: ${({ theme }) => theme.paddings.lg};
  position: relative;
  cursor: pointer;
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 5px 0;
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    span {
      font-size: ${({ theme }) => theme.fontSizes.small};
      color: ${({ theme }) => theme.colors.gray_2};
      margin: 5px 0px 5px ${({ theme }) => theme.margins.base};
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray_2};
    margin: ${({ theme }) => theme.margins.base} 0 0;
  }
`;
const PetImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-image: url(${petimage_bg});
  background-size: cover;
  position: absolute;
  right: 16px;
  top: 13px;
`;