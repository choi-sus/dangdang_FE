import React, {useState} from "react";
import styled from "styled-components"
import {Text, Grid} from "../elements/Index"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as walkActions } from "../redux/modules/walk"; 
import { Map , Polyline} from "react-kakao-maps-sdk"
import {history} from "../redux/configStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { walkend_dog, marker_brown, marker_danger, marker_water, marker_yellow  } from "../static/images";

const WalkEnd = () => {
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(walkActions.endWalkDB())
      },[]);

    const [draggable, setDraggable] = useState(false)
    const [zoomable, setZoomable] = useState(false)

    const walk_list = useSelector((state) => state.walk.endList.recentData)

    return(
        <EndContainer>
            <Head>
                <Grid width="auto" _onClick={()=> {history.replace("/main")}}>
                  <FontAwesomeIcon icon={faAngleLeft}/>
                </Grid>
                <Text center color="#4F4F4F" size="18px">산책 종료</Text>
            </Head>
            <ImgContent>
                <img src={walkend_dog} alt="산책끝난 강아지 이미지" />
                <Text color="#333" center size="16px">즐거운 산책이었다개!</Text>
            </ImgContent>
            <DayRecord>
                <Text color="#4f4f4f" size="14px" margin="0 0 10px 0">오늘의 기록</Text>
                <Record>
                    {walk_list && <Text bold><span>시간</span>{walk_list.time.split(":").reverse()[2]? walk_list.time : "00:"+walk_list.time}</Text>}
                    {walk_list && <Text bold><span>거리(km)</span>{walk_list.distance}</Text>}
                </Record>
            </DayRecord>
            <WalkReport>
                <IconContent>
                    <Text color="#4f4f4f" size="14px" margin="0 0 25px 0">산책레포트</Text>
                    <IconArea>
                        <img src={marker_water} alt="식수 아이콘" />
                        <Text color="#4f4f4f" size="16px" margin="0 0 15px 0" center>식수</Text>
                        {walk_list && <IconNum>{walk_list.water}</IconNum>}
                    </IconArea>
                    <IconArea>
                        <img src={marker_yellow} alt="소변 아이콘" />
                        <Text color="#4f4f4f" size="16px" margin="0 0 15px 0" center>소변</Text>
                        {walk_list && <IconNum>{walk_list.yellow}</IconNum>}
                    </IconArea>
                    <IconArea>
                        <img src={marker_brown} alt="대변 아이콘" />                
                        <Text color="#4f4f4f" size="16px" margin="0 0 15px 0" center>대변</Text>
                        {walk_list && <IconNum>{walk_list.brown}</IconNum>}
                    </IconArea>
                    <IconArea>
                        <img src={marker_danger} alt="위험구간 아이콘" />
                        <Text color="#4f4f4f" size="16px" margin="0 0 15px 0" center>위험</Text>
                        {walk_list && <IconNum>{walk_list.danger}</IconNum>}
                    </IconArea>
                </IconContent>
                {walk_list && <Map center={walk_list.path[0]} style={{width: "100%", height: "450px"}} level={3}>
                <Polyline path={walk_list.path} strokeWeight={5} strokeColor={"#FFAE00"} strokeOpacity={0.7} strokeStyle={"solid"}/>
                </Map>}
            </WalkReport>
        </EndContainer>       
    )
}

export default WalkEnd

const EndContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 15.5% ${({ theme }) => theme.paddings.xxxxl};
    box-sizing: border-box;
    height: inherit;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Head = styled.div`
  margin-bottom: 40px; 
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
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
  svg{
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.gray_4};
    cursor: pointer;
  }
`

const ImgContent = styled.div`
    text-align: center;
    position: relative;
    margin-bottom: 15px;
    p{
        position: absolute;
        left: 50%;
        transform: translateX(-52%);
        top: 16px;
    }
`

const DayRecord = styled.div`
    padding: 20px 25px;
    border-radius: 11px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    margin-bottom: ${({ theme }) => theme.margins.base};
`

const Record = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    &::after {
        content: ""; display: block; visibility: hidden; clear: both;
    }
    p{
        margin: 0;  float: left;
    }
    p:nth-child(1){
        font-size: 30px;
        color: ${({ theme }) => theme.colors.gray_5};
        width: 65%;
    }
    p:nth-child(1) span{
        font-size: ${({ theme }) => theme.fontSizes.small};
        color: ${({ theme }) => theme.colors.gray_2};
        display: inline-block;
        margin-right: ${({ theme }) => theme.margins.base};
        vertical-align: 8px;
        font-weight: ${({ theme }) => theme.fontWeight.Regular};
    }
    p:nth-child(2){
        font-size: 30px;
        color: ${({ theme }) => theme.colors.gray_5};
        text-align: right;
    }
    p:nth-child(2) span{
        font-size: ${({ theme }) => theme.fontSizes.small};
        color: ${({ theme }) => theme.colors.gray_2};
        display: inline-block;
        margin-right: ${({ theme }) => theme.margins.base};
        vertical-align: 8px;
        font-weight: ${({ theme }) => theme.fontWeight.Regular};
    }
`
 
const WalkReport = styled.div`
    border-radius: 11px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    background-color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
`

const IconContent = styled.div`
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  padding: ${({ theme }) => theme.paddings.xxxxl};
`
const IconArea = styled.div`
  width: 25%;
  float: left;
  text-align: center;

  img {
      height: 39px;
  }
`

const IconNum = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray_4};
`