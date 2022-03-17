import React from "react"
import styled from "styled-components";

const KakaoLogin = () => {
    return (
     <Kakao onClick={() => {window.location.href = `https://dengroundserver.com/api/kakao`;}}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1601 8C19.6667 8 23.3201 10.8475 23.3201 14.361C23.3201 17.8737 19.6667 20.7212 15.1601 20.7212C14.7113 20.7214 14.263 20.6928 13.8179 20.6357L10.3923 22.8762C10.0029 23.0821 9.86535 23.0596 10.0254 22.5552L10.7187 19.6969C8.48047 18.5622 7 16.596 7 14.361C7 10.8483 10.6534 8 15.1601 8Z" fill="#382020"/>
        </svg>
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