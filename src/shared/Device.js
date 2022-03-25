import React from "react";
import styled from "styled-components";
import { useReactPWAInstall } from "react-pwa-install";
import { use100vh } from "react-div-100vh";

import MobileInstall from "../components/MobileInstall";
import PwaInstall from "../components/PwaInstall";

import { isMobile } from "./DeviceDetector";
// import { web_phone, web_back, web_logo } from "../static/images";

const Device = ({ children }) => {
  const { supported, isInstalled } = useReactPWAInstall();
  const [isSupported, setIsSupported] = React.useState(null);
  const [webView, setWebView] = React.useState(true);
  const support = supported();
  const height = use100vh();

  React.useEffect(() => {
    setIsSupported(support);
  }, [support]);

  return isMobile ? (
    <>
      {isSupported ? (
        <>
          {!isInstalled() && webView ? (
            <>
              <MobileInstall
                _onClick={() => {
                  setWebView(false);
                }}
              />
            </>
          ) : (
            <Mobile style={{ height: height }}>{children}</Mobile>
          )}
        </>
      ) : (
        <Mobile style={{ height: height }}>{children}</Mobile>
      )}
    </>
  ) : (
    <Web>
      {isSupported ? (
        <>{!isInstalled() ? <PwaInstall web text="앱 다운로드" /> : null}</>
      ) : null}
      <Phone>
        <WebViewLayout>{children}</WebViewLayout>
      </Phone>
    </Web>
  );
};

//모바일 디바이스
const Mobile = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  min-width: 280px;
  /* overflow: hidden; */
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: rgb(255, 251, 241);
`;

//웹 브라우저
const Web = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 251, 241);
  background-size: 300px 144px, cover;
  background-position: 326px 230px, 0% 100%;
  background-repeat: no-repeat;
`;
const Phone = styled.div`
  width: 426px;
  height: 92%;
  min-height: 750px;
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background-color: rgb(255, 251, 241);
  background-size: 100% 100%;
  @media screen and (min-width: 1120px) {
    right: 10%;
    top: 50%;
    transform: translate(0%, -50%);
  }
`;
const WebViewLayout = styled.div`
  max-width: 375px;
  height: calc(100% - 43px);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  background-color: rgb(255, 251, 241);
  overflow: hidden;
`;

export default Device;