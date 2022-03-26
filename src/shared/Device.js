import React from "react";
import styled from "styled-components";
import { useReactPWAInstall } from "react-pwa-install";
import { use100vh } from "react-div-100vh";

import MobileInstall from "../components/MobileInstall";
import PwaInstall from "../components/PwaInstall";

import { isMobile } from "./DeviceDetector";
import { web_bg, iphone_mockup, all_title } from "../static/images";

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
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.main_1};
`;

//웹 브라우저
const Web = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${all_title}), url(${web_bg}) ;
  background-size: 350px 150px, cover;
  background-position: 975px 150px, 0% 100%;
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
  background: url(${iphone_mockup}) no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: 1120px) {
    left: 10%;
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
  background-color: ${({ theme }) => theme.colors.main_1};
  overflow: hidden;
`;

export default Device;