import React ,{useEffect, useState}from "react";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { actionCreators as walkActions } from "../redux/modules/walk"; 
import moment from "moment-timezone";
import { Map , Polyline} from "react-kakao-maps-sdk"
import { walk_delete, walklist_dog, marker_brown, marker_danger, marker_water, marker_yellow } from "../static/images";

const WalkDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const walk = useSelector((state)=> state.walk.walk)
  useEffect(()=>{
    dispatch(walkActions.WalkOneDB(params.id))
  },[])
  const DelWalk = () => {
    dispatch(walkActions.DelWalkDB(params.id));
  }
  const at = (moment.tz(walk.createdAt,'Asia/seoul').format('A')==="AM"? "오전 " : "오후 ")
  return (
    <WalkDetailContainer>
      <Head>
        <Grid width="auto" _onClick={() => {history.replace('/walklist')}}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Grid>
        {walk &&( 
          <Text center color="#4F4F4F" size="18px">{moment.tz(walk.createdAt,'Asia/seoul').format('YYYY.MM.DD')+"  ·  "+at+moment.tz(walk.createdAt,'Asia/seoul').format('h:mm')}
            <img src={walk_delete} alt="산책일지 삭제 아이콘" onClick={()=>{DelWalk();}} />
          </Text>)}
      </Head>
      <SvgFrame>
        <img src={walklist_dog} alt="엎드린 강아지 이미지" />
      </SvgFrame>
      {walk &&(
        <MarkerCard>
          <MarkerFrame>
            <img src={marker_water} alt="식수 아이콘" />    
            <p>식수</p>
            <p>{walk.water}</p>
          </MarkerFrame>
          <MarkerFrame>
            <img src={marker_yellow} alt="소변 아이콘" />
            <p>소변</p>
            <p>{walk.yellow}</p>
          </MarkerFrame>
          <MarkerFrame>
            <img src={marker_brown} alt="대변 아이콘" />
            <p>대변</p>
            <p>{walk.brown}</p> 
          </MarkerFrame>
          <MarkerFrame>
            <img src={marker_danger} alt="위험구간 아이콘" />
            <p>위험</p>
            <p>{walk.danger}</p>
          </MarkerFrame>
        </MarkerCard>
      )}
      <WalkInfo>
        {walk && (
          <InfoDetail>
              <p>산책시간</p>
              <p>{walk.time.split(":").reverse()[2]? walk.time : "00:"+walk.time}</p>
          </InfoDetail>
        )}
        {walk && (
          <InfoDetail>
              <p>거리(km)</p>
              <p>{walk.distance}</p>
          </InfoDetail>
        )}
      </WalkInfo>
      {walk &&
        <Map center={walk.path[0]} style={{width: "100%", height: "400px", borderRadius: "15px"}} level={3}>
          <Polyline path={walk.path} strokeWeight={5} strokeColor={"#FFAE00"} strokeOpacity={0.7} strokeStyle={"solid"}/>
        </Map>
      }
    </WalkDetailContainer>
  );
}
  
export default WalkDetail;

const WalkDetailContainer = styled.div`
  position: relative;
  height: inherit;
  padding: 54px 30px 30px;
  box-sizing: border-box;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  display: none;
  }
`;
const Head = styled.div`
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.paddings.lg};
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > div {
    float: left;
    svg {
        color: ${({ theme }) => theme.colors.gray_4};
        font-size: ${({ theme }) => theme.fontSizes.xxl};
        cursor: pointer;
    }
  }
  & > p {
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeight.base};
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray_4};
  }
  img {
    color: ${({ theme }) => theme.colors.gray_4};
    position: absolute;
    right: 30px;
    cursor: pointer;
  }
`;

const SvgFrame = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 ${({ theme }) => theme.margins.xxxxl};
  img {
    position: relative;
  }
  p {
    position: absolute;
    color: ${({ theme }) => theme.colors.gray_5};
    transform: translate(30%, -3%);
  }
`;
const MarkerCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.margins.xxxxl} 35px 15px;
  width: calc(100% -60px);
  margin-bottom: ${({ theme }) => theme.margins.lg};
`;
const MarkerFrame = styled.div`
  display: grid;
  justify-items: center;
  img {
    width: 30px;
    margin-bottom: 3px;
  }
  p {
    color: ${({ theme }) => theme.colors.gray_4};
    line-height: ${({ theme }) => theme.lineHeight.xl};
    text-align: left;
  }
`;
const WalkInfo = styled.div`
  display: grid;
  border-radius: 15px;
  box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.paddings.xxl} 25px 10px;
  width: calc(100% -60px);
  margin-bottom: ${({ theme }) => theme.margins.lg};
`;
const InfoDetail = styled.div`
display: flex;
align-items: center;
margin: 5px 0;
  p:first-child {
    color: ${({ theme }) => theme.colors.gray_2};
    font-size: ${({ theme }) => theme.fontSizes.base};
    width: 100px;
  }
  p {
    font-size: 32px;
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
  }
`;