import React from "react";
import styled from "styled-components";
import PwaInstall from "../components/PwaInstall";

import { mobile_bg, all_title } from "../static/images";

const MobileInstall = (props) => {
  const { _onClick } = props;

  return (
    <Content>
      <h2>산책이 필요한 순간</h2>
      <img src={all_title} alt="mobile_title" />
      <p>
        앱 다운로드하고 <br /> 매일 가는 산책길, 새롭게 즐겨보세요!
      </p>
      <>
        <PwaInstall text="앱 다운로드" />
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
  background-size: cover;
  background-position: 0%, 0%;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 35%;
  box-sizing: border-box;
  & h2{
    color: #ffc710;
    font-family: 'Noto Sans KR', sans-serif !important;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeight.Bold};
    margin: 0px 0 4%;
    
  }
  & img {
    width: 60%;
    max-width: 350px;
  }
  & p {
    color: ${({ theme }) => theme.colors.main_2};
    font-family: 'Noto Sans KR', sans-serif !important;
    font-weight: ${({ theme }) => theme.fontWeight.Bold};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeight.small};
    margin: 18% 0;
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 374px) {
    padding-top: 20%;
    h2{
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
    p{
      margin: 14% 0;
    }
  }
`;

export default MobileInstall;