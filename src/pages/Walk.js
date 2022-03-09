import React, {useEffect, useRef, useState} from "react";
import { useDispatch , useSelector} from "react-redux";
import { Map , Polyline, MapMarker} from "react-kakao-maps-sdk"
import Stopwatch from "../components/Stopwatch";
import {actionCreators as locaActions} from "../redux/modules/geolocation"
import { useLocation } from "react-router-dom";
import {Button} from "../elements/Index"
import { getDistanceBetween } from 'geolocation-distance-between';


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
    const [distances, setDistances] = useState([])

    useEffect(() => {
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
    }, [])

      useEffect(() => {
        centers.current = setTimeout(()=>{ 
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
         }, 5000);
        
         return () => clearTimeout(centers.current); 
      }, [state]);
      const polylinePath = useSelector((state) => state.geolocation.polylinePath);
      console.log(polylinePath)
      const [stop,setStop]=useState(false);
      const walkEnd = ()=> {
        clearTimeout(centers.current);
        setStop(true)
        if (1 < polylinePath.length) {
          let distanceBetween = 0;
          
          for (let i = 0; i < polylinePath.length; i++){
            console.log(`폴리라인패스 : ${i}` + polylinePath[i].lat, polylinePath.length);

            if (polylinePath.length - 1 === i){
              distanceBetween += getDistanceBetween({latitude: polylinePath[i]?.lat, longitude: polylinePath[i]?.lng}, {latitude: polylinePath[i]?.lat, longitude: polylinePath[i]?.lng});
            }else{
              distanceBetween += getDistanceBetween({latitude: polylinePath[i]?.lat, longitude: polylinePath[i]?.lng}, {latitude: polylinePath[i + 1]?.lat, longitude: polylinePath[i + 1]?.lng});
            }
          }
   
          console.log(distanceBetween);
        }
      }
      
      return (
          <>
        <Stopwatch stop={stop}/>
        <Button _onClick={walkEnd} text="산책 종료"></Button>
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
        {/* {!!state && (
            <>
              <p>{'중심 좌표는 위도 ' + state.center.lat + ', 경도 ' + state.center.lng +' 입니다'}</p>
            </>
          )} */}
          <>
            <span className="label">총거리</span>{" "}
            {/* <span className="number">{distance}</span>m */}
          </>          
          {
            polylinePath.map((a, i)=> {
                return(
                  <React.Fragment key={i}>
                    <p>{'중심 좌표는 위도 ' + a.lat + ', 경도 ' + a.lng +' 입니다' + i*5 + '초'}</p>
                  </React.Fragment>
                )
            })
          }
        </>
      );
    
}

export default Walk;

// 1. 실시간 거리 계산
// 2. 산책 종료 버튼 눌렀을 때 타이머 멈추기, 폴리라인 멈추기 (완)
// 3. 그리고 해당 데이터 서버에 보내기
// 4. 보낸 값 get으로 받아서 잘 나오나 확인
// 5. 물, 배변 마커 찍기
// 6. 코드 정리
