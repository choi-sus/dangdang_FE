import React, {useRef, useEffect, useState} from "react";
import Stopwatch from "../components/Stopwatch";
import { Map, Circle, Polyline, Ellipse, Polygon, Rectangle} from "react-kakao-maps-sdk"

const Walk = () => {
    const [state, setState] = useState({
        center: {
          lat: 33.450701,
          lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
      })
      
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

    const polylinePath = [
        { lat: 33.452344169439975, lng: 126.56878163224233 },
        { lat: 33.452739313807456, lng: 126.5709308145358 },
        { lat: 33.45178067090639, lng: 126.572688693875 },
    ]
    //카카오 폴리라인 깃허브
    // useEffect(() => {
    //     polyline.setPath(polyLinePath)
    //   }, [polyline, polyLinePath])
    console.log(state.center)
      return (
          <>
        <Map // 지도를 표시할 Container
        center={state.center}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={3} // 지도의 확대 레벨
          onCenterChanged={(map) => setState({
            level: map.getLevel(),
            center: {
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            }
          })}
        >
          {/* <Polyline
            path={polylinePath}
            strokeWeight={5} // 선의 두께 입니다
            strokeColor={"#FFAE00"} // 선의 색깔입니다
            strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle={"solid"} // 선의 스타일입니다
          /> */}
           <Circle
        center={state.center}
        radius={50}
        strokeWeight={5} // 선의 두께입니다
        strokeColor={"#75B8FA"} // 선의 색깔입니다
        strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"dash"} // 선의 스타일 입니다
        fillColor={"#CFE7FF"} // 채우기 색깔입니다
        fillOpacity={0.7} // 채우기 불투명도 입니다
      />

        </Map>
        
        {!!state && (
            <>
              <p>{'지도 레벨은 ' + state.level + ' 이고'}</p>
              <p>{'중심 좌표는 위도 ' + state.center.lat + ', 경도 ' + state.center.lng +' 입니다'}</p>
            </>
          )}
        </>
      );
    
}

export default Walk;

