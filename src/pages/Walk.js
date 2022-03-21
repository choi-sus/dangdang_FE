import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components"
import { useDispatch , useSelector} from "react-redux";
import { Map , Polyline, MapMarker} from "react-kakao-maps-sdk"
import {actionCreators as locaActions} from "../redux/modules/geolocation"
import { useLocation } from "react-router-dom";
import {Button, Text} from "../elements/Index"
import { getDistanceBetween } from 'geolocation-distance-between';
import {actionCreators as walkActions} from "../redux/modules/walk";
import NavWalk from "../components/NavWalk";
import WalkTop from "../components/WalkTop"


const Walk = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const firstLoca = location.state.nowLoca;
    const [state, setState] = useState({
        center: {
          lat: firstLoca.lat,
          lng: firstLoca.lng,
        },
        errMsg: null,
        isLoading: true,
    })

    const [draggable, setDraggable] = useState(false)
    const [zoomable, setZoomable] = useState(false)
    const centers = useRef(); 

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setState((prev) => ({
              ...prev,
              center: {
                lat: position.coords.latitude, // 위도
                lng: position.coords.longitude, // 경도
              },
              isLoading: false,
            }))
            dispatch(locaActions.setPath(state.center))
          },
          (err) => {
            setState((prev) => ({
              ...prev,
              errMsg: err.message,
              isLoading: false,
            }))
          }
        )
      } else {
        setState((prev) => ({
          ...prev,
          errMsg: "현재 위치를 표시할 수 없어요.",
          isLoading: false,
        }))
      }
    }, [])

    useEffect(() => {
      centers.current = setTimeout(()=>{ 
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setState((prev) => ({
              ...prev,
              center: {
                lat: position.coords.latitude, // 위도
                lng: position.coords.longitude, // 경도
              },
              isLoading: false,
            }))
            dispatch(locaActions.setPath(state.center))
          },
          (err) => {
            setState((prev) => ({
              ...prev,
              errMsg: err.message,
              isLoading: false,
            }))
          }
        )
      } else {
        setState((prev) => ({
          ...prev,
          errMsg: "현재 위치를 표시할 수 없어요.",
          isLoading: false,
        }))
      }
       }, 5000);
      
       return () => clearTimeout(centers.current); 
    }, [state]);

    const polylinePath = useSelector((state) => state.geolocation.polylinePath);

    const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();

    let updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
      if (updatedM === 59) { updatedH++; updatedM = -1;}
      if (updatedS === 59) { updatedM++; updatedS = -1;}
      updatedS++;
      return setTime({ s: updatedS, m: updatedM, h: updatedH });
    };

    useEffect(() => {
      setInterv(setInterval(run, 1000));
      return() => {
        clearInterval(interv);
      }
    },[]);

    const [water, SetWeter] = useState(0);
    const [yellow, SetYellow] = useState(0);
    const [brown, SetBrown] = useState(0);
    const [danger, SetDanger] = useState(0);

    const setChange = {water, SetWeter, yellow, SetYellow, brown, SetBrown, danger, SetDanger}
      const timeRef = useRef(null);
      const walkDB =()=>{
        const lastTime = timeRef.current.innerText;
        let distanceBetween = 0;
        if (1 < polylinePath.length) {
          for (let i = 0; i < polylinePath.length; i++){
            if (polylinePath.length - 1 === i){
              distanceBetween += getDistanceBetween({latitude: polylinePath[i]?.lat, longitude: polylinePath[i]?.lng}, {latitude: polylinePath[i]?.lat, longitude: polylinePath[i]?.lng});
            }else{
              distanceBetween += getDistanceBetween({latitude: polylinePath[i]?.lat, longitude: polylinePath[i]?.lng}, {latitude: polylinePath[i + 1]?.lat, longitude: polylinePath[i + 1]?.lng});
            }
          }
          // console.log(distanceBetween); 
        }
        const totalDistance = String(distanceBetween).substr(0, 3);
        // console.log(totalDistance);
        if(lastTime){
          dispatch(walkActions.addWalkDB(polylinePath, lastTime, totalDistance, water, yellow, brown, danger));
        }
      }

      const walkEnd = ()=> {
        clearTimeout(centers.current);
        clearInterval(interv);
        walkDB();
      }
      const walkPause = () => {
        clearInterval(interv);
        clearTimeout(centers.current);
      }

      const walkRestart = () => {
        setInterv(setInterval(run, 1000));

        centers.current = setTimeout(()=>{ 
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setState((prev) => ({
                  ...prev,
                  center: {
                    lat: position.coords.latitude, // 위도
                    lng: position.coords.longitude, // 경도
                  },
                  isLoading: false,
                }))
                dispatch(locaActions.setPath(state.center))
                console.log(locaActions.setPath(state.center))
              },
              (err) => {
                setState((prev) => ({
                  ...prev,
                  errMsg: err.message,
                  isLoading: false,
                }))
              }
            )
          } else {
            setState((prev) => ({
              ...prev,
              errMsg: "현재 위치를 표시할 수 없어요.",
              isLoading: false,
            }))
          }
           }, 5000);
      }

      return (
        <WalkContainer>
          <TopBg></TopBg>
          <TimeContent ref={timeRef}>
            {time.h === 0 ? ("") : (<span>{time.h >= 10 ? time.h : "0" + time.h}:</span>)}
            <span>{time.m >= 10 ? time.m : "0" + time.m}</span>:
            <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
          </TimeContent>
          <WalkTop setChange={setChange}></WalkTop>
          <Map center={state.center} isPanto={state.isPanto} style={{width: "100vw", height: "100vh"}}
          level={3} draggable={draggable} zoomable={zoomable}>
          <Polyline path={polylinePath} strokeWeight={5} strokeColor={"#FFAE00"} strokeOpacity={0.7} strokeStyle={"solid"}/>
          {!state.isLoading && (
            <MapMarker position={state.center}
            image={{src: "img/marker.PNG", size: {width: 71, height: 71,},
            options: {offset: {x: 35.5, y: 35.5,},},}}/>
          )}
          </Map>
          <NavWalk walkEnd={walkEnd} walkPause={walkPause} walkRestart={walkRestart}></NavWalk>
        </WalkContainer>
      );
}

export default Walk;

const WalkContainer = styled.div`
  position: relative;
  overflow: hidden;
`
const TopBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 65px 0 90px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, #FFFBF1 49.12%, rgba(255, 255, 255, 0) 100%);
  z-index: 5;
`

const TimeContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60px;
  font-size: 52px;
  font-weight: 700;
  color: #333;
  z-index: 5;
`

// 월: 일시정지, 삭제, 파비콘, 웹 타이틀 수정
// 화: 닉네임 수정, 비밀번호 수정, 로그인 된 상태에 가이드 안 나오게 하기, 가이드 페이지 전환 에러 해결하기
// 수: pwa, 반응형 디테일, 사이트 목업 적용
// 목: 이벤트 페이지
// 금: 이벤트 페이지