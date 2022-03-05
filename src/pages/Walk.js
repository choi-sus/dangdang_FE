import React, {useEffect, useState} from "react";
import { useDispatch , useSelector} from "react-redux";
import { Map , Polyline, MapMarker } from "react-kakao-maps-sdk"
import Stopwatch from "../components/Stopwatch";
// import Polyline from "../components/Polyline";
import {actionCreators as locaActions} from "../redux/modules/geolocation"
import { useLocation } from "react-router-dom";

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

      useEffect(() => {
        setTimeout(()=>{ 
          if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
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
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
          setState((prev) => ({
            ...prev,
            errMsg: "geolocation을 사용할수 없어요..",
            isLoading: false,
          }))
        }
         }, 1000);
        
      }, [state]);
      const polylinePath = useSelector((state) => state.geolocation.polylinePath);

      return (
          <>
        <Stopwatch/>
        <Map // 지도를 표시할 Container
        center={state.center}
        isPanto={state.isPanto}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={3} // 지도의 확대 레벨
          draggable={draggable}
          zoomable={zoomable}
        >
        <Polyline
        path={polylinePath}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"#FFAE00"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "출발!"}
            </div>
          </MapMarker>
        )}
        </Map>
        {!!state && (
            <>
              <p>{'중심 좌표는 위도 ' + state.center.lat + ', 경도 ' + state.center.lng +' 입니다'}</p>
            </>
          )}
        </>
      );
    
}

export default Walk;

/* 
1. 초기 path 현재 위치부터 나오게 (토요일 새벽) (완)!!!!!!!!!!!!!!
2. 현재 위치 출발 마커 찍기 (토요일 새벽) (완)!!!!!
3. 현재 위치 동그라미 모양 그거... 설정할 수 있나 찾아보기 없으면 카카오 데브톡에 질문 (토요일 새벽) (마커 실시간으로 찍혀서 안 해도 될 듯)
4. 산책 중 들어가면 실시간 지도, 시간 찍히기 (토요일 새벽~ 일요일) 
5. 산책 종료 누르면 서버에 거리, 시간, 지도 이미지 (월요일)
6. 그런데 이 지도 이미지를 어떻게...? (일요일)
7. 산책 종료 페이지 (일요일)
8. 돌발 가이드 페이지 (월요일)
9. 화요일에는 로그인 안 한 유저 못 들어오게 페이지 에러 넣기 & 알맞지 않은 주소 입력했을 때 에러 보내기
*/