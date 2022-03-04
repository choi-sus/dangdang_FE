import React, {useRef, useEffect, useState} from "react";
import Stopwatch from "../components/Stopwatch";
import { Map, Polyline} from "react-kakao-maps-sdk"

const Walk = () => {
    const [state, setState] = useState({
        center: {
          lat: 33.450701,
          lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
    })
    const [draggable, setDraggable] = useState(false)
    const [zoomable, setZoomable] = useState(false)
    const [input, setInput] = useState("");
      
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
      }, [state])

    
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
          draggable={draggable}
          zoomable={zoomable}
          onCenterChanged={(map) => setState({
            center: {
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            }
          })}
        >
        </Map>
        <input type="text" onChange={(e)=> {setInput(e.target.value)}}></input>
        <p>{input}</p>
        
        {!!state && (
            <>
              <p>{'중심 좌표는 위도 ' + state.center.lat + ', 경도 ' + state.center.lng +' 입니다'}</p>
            </>
          )}
        </>
      );
    
}

export default Walk;

