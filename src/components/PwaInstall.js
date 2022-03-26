import React from "react";
import styled from "styled-components";
import { useReactPWAInstall } from "react-pwa-install";

import { logo, download } from "../static/images"; 

const PwaInstall = (props) => {
  const { pwaInstall } = useReactPWAInstall();

  const handleClick = () => {
    pwaInstall({
      title: "댕댕한바퀴 다운받기",
      logo: logo,
    })
      .then(() => {
        // 설치 성공
      })
      .catch(() => {
        console.log("설치 실패");
      });
  };

  return (
    <InstallBox>
      {props.web ? (
        <WebInstall>
          <WebInstallButton onClick={handleClick}>
            {props.text}
          </WebInstallButton>
        </WebInstall>
      ) : (
        <>
          <MobileInstallButton onClick={handleClick}>
            {props.text}
          </MobileInstallButton> 
        </>
      )}
    </InstallBox>
  );
};

const InstallBox = styled.div`
  cursor: pointer;
`;

const WebInstall = styled.div`
  position: relative;
  top: 420px;
  left: 58%;
  text-align: center;
`;

const WebInstallButton = styled.div`
  width: 204px;
  height: 54px;
  border-radius: 32px;
  background-color: #ffc710;
  color: #fff;
  cursor: pointer;
  position: relative;
  line-height: 54px;
  &::before {
    content: "";
    width: 31px;
    height: 31px;
    position: absolute;
    bottom: -4px;
    left: 0;
    z-index: 100;
    background: url(${download});
    background-size: cover;
    background-position: 0%, 0%;
    background-repeat: no-repeat;
  }
`;

const MobileInstallButton = styled.div`
  width: 200px;
  height: 60px;
  background-color: #ffc710;
  color: #fff;
  border-radius: 48px;
  line-height: 60px;
  margin: 0 auto;
  font-size: 24px;
  position: relative;
`;

export default PwaInstall;