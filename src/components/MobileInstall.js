import React from "react";
import styled from "styled-components";
import PwaInstall from "../components/PwaInstall";

import { mobile_bg, mobile_title } from "../static/images";

const MobileInstall = (props) => {
  const { _onClick } = props;

  return (
    <Content>
      <h2>산책이 필요한 순간</h2>
      <img src={mobile_title} alt="mobile_title" />
      <p>
        앱 다운로드하고 <br /> 매일 가는 산책길, 새롭게 즐겨보세요!
      </p>
      <>
        <PwaInstall text="앱 다운로드" />
        <span onClick={_onClick}>모바일웹 이용하기</span>
      </>
    </Content>
  );
};

MobileInstall.defaultProps = {
  _onClick: () => {},
};

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${mobile_bg});
  background-size: 100%, 100%;
  background-position: 0%, 0%;
  background-repeat: no-repeat;
  text-align: center;
  padding-top:144px ;
  box-sizing: border-box;
  & h2 {
    color: #ffc710;
    font-size: 38px;
    font-family: 'Godo', sans-serif;
  }
  & img {
    width: 130px;
  }
  & p {
    padding: 40px 0;
    font-size: 28px;
    color: #ffd04c;
    font-family: 'Godo', sans-serif;
  }

  & span {
    display: inline-block;
    position: relative;
    cursor: pointer;
    ::before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -4px;
      left: 0;
      z-index: 100;
      background-color: transparent;
    }
`;

export default MobileInstall;