import React from "react";
import styled from "styled-components";
import PwaInstall from "../components/PwaInstall";

// import { mobile_back, mobile_logo } from "../static/images";

const MobileInstall = (props) => {
  const { _onClick } = props;

  return (
    <Content>
      {/* <img src={mobile_logo} alt="mobile_logo" /> */}
      <p>
        한번의 로그인으로 <br /> 댕댕이와 산책가요!!
      </p>
      <>
        <PwaInstall text="편하게 앱 이용하기" />
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
  background-color: rgb(255, 251, 241);
  background-size: 100%, 100%;
  background-position: 0%, 0%;
  background-repeat: no-repeat;
  text-align: center;
  padding-top:144px ;
  box-sizing: border-box;
  & img {
    width: 130px;
  }
  & p {
    padding: 40px 0;
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
      background-color: rgb(255, 251, 241);
    }
`;

export default MobileInstall;