import React from "react"
import styled from "styled-components";

const KakaoLogin = () => {
    const REST_API_KEY = "e7e7a555f24784e43f5f6a91c16e3861";
    const REDIRECT_URI = "http://localhost:3000/oauth";

    return (
     <Kakao
      onClick={() => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      }}
    >
    <img src="../kakao_login_medium_narrow.png" alt=""/>
    </Kakao>
    )
}
const Kakao = styled.a`
  height: 50px;
  width: 47%;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(254, 229, 0);
  border: 0;
  cursor: pointer;
  color: #000;
  & img {
    width: 22px;
    margin-right: 12px;
  }
  &:hover {
    color: #000;
  }
`;

export default KakaoLogin;
