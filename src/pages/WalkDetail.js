import React ,{useEffect, useState}from "react";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Button, Grid, Input, Text} from "../elements/Index"
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
    const [draggable, setDraggable] = useState(false)
    const [zoomable, setZoomable] = useState(false)
    const DelWalk = () => {
      dispatch(walkActions.DelWalkDB(params.id));
      history.replace('/walklist')
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
                  <img src={marker_water} alt="급수 아이콘" />    
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
          </Map>}
        </WalkDetailContainer>
      );
  }
  
  export default WalkDetail;
  
  const WalkDetailContainer = styled.div`
    position: relative;
    background-color: #fffbf1;
    padding: 54px 30px 30px;
    box-sizing: border-box;
  `;
  const Head = styled.div`
    margin-bottom: 25px;
    box-sizing: border-box;
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
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.5px;
      color: #4f4f4f;
      & > svg {
        transform: translate(60px, 3px);
      }
    }
    img {
      font-size: 25px;
      color: #4f4f4f;
      position: absolute;
      right: 30px;
    }
  `;
  const SvgFrame = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 20px;
    img {
      position: relative;
    }
    p {
      position: absolute;
      color: #333333;
      transform: translate(30%, -3%);
    }
  `;
  const MarkerCard = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    background-color: #fff;
    padding: 20px 35px 15px;
    width: calc(100% -60px);
    margin-bottom: 12px;
  `;
  const MarkerFrame = styled.div`
    display: grid;
    justify-items: center;
    img {
      width: 30px;
      margin-bottom: 3px;
    }
    p {
      color: #4f4f4f;
      line-height: 30px;
      text-align: left;
    }
  `;
  const WalkInfo = styled.div`
    display: grid;
    border-radius: 15px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    background-color: #fff;
    padding: 20px 25px 10px;
    width: calc(100% -60px);
    margin-bottom: 12px;
  `;
  const InfoDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
    p:first-child {
      color: #bdbdbd;
      font-size: 16px;
      width: 100px;
    }
    p {
      font-size: 32px;
      font-weight: 500;
    }
  `;