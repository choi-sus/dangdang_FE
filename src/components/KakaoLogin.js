import React from "react"
import styled from "styled-components";
import { kakaologin } from "../static/images";

const KakaoLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = "https://denground.com/kakao";
    return (
    <Kakao onClick={() => { window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;}}>
      <img src={kakaologin} alt="kakaologin" />
      <KakaoText>카카오 로그인</KakaoText>
    </Kakao>
    )
}

export default KakaoLogin;

const Kakao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoText = styled.span`
  font-size: 14px;
  color: #382020;
`