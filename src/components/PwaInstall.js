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
        <WebInstall  onClick={handleClick}>
          <span>{download}</span>
          <WebInstallButton>
            {props.text}
          </WebInstallButton>
        </WebInstall>
      ) : (
        <>
          <MobileInstallButton onClick={handleClick}>
            <span>{download}</span>
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
  width: 204px;
  height: 54px;
  position: relative;
  top: 420px;
  left: 380px;
  border-radius: 32px;
  background-color: #ffc710;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WebInstallButton = styled.div`
  color: #fff;
  cursor: pointer;
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
`;

export default PwaInstall;