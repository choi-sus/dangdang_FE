import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Map, MapMarker } from "react-kakao-maps-sdk"

const MainMap = (props)=> {

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

  const sendLoca = () => {
    const loca=state.center
    props.defaultLoca(loca)
  }

  return (
    <MainContent>
      <Map center={state.center} onCreate={sendLoca} style={{width: "100%", height: "inherit"}}
        level={3} draggable={draggable} zoomable={zoomable}>
        {!state.isLoading && (
          <MapMarker position={state.center}></MapMarker>
        )}
      </Map>
    </MainContent>
  )
}

export default MainMap

const MainContent = styled.div`
  height: inherit;
  opacity: 0.5;
  -webkit-filter: blur(2px);
  filter: blur(2px);
`