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
          <WebInstallButton>
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
  width: 204px;
  height: 54px;
  position: relative;
  top: 420px;
  left: 58%;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.main_2};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const WebInstallButton = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-family: "NotoSansKR", sans-serif;
  &::before {
    content: "";
    width: 25px;
    height: 25px;
    background: url(${download});
    background-size: cover;
    background-position: 0%, 0%;
    background-repeat: no-repeat;
    display: inline-block;
  }
`;

const MobileInstallButton = styled.div`
  width: 200px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.main_2};
  border-radius: 48px;
  font-family: "NotoSansKR", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 48px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default PwaInstall;