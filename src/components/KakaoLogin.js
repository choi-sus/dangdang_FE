import React from "react"
import styled from "styled-components";

const KakaoLogin = () => {
    const REST_API_KEY = "e7e7a555f24784e43f5f6a91c16e3861";
    const REDIRECT_URI = "https://bad-panda-93.loca.lt/main";

    return (
     <Kakao
      onClick={() => {
        window.location.href = `https://kauth.kakao.com/main/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      }}
    >
    </Kakao>
    )
}
const Kakao = styled.button`
  background-image: url(img/kakao_login_large_wide.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50px;
  width: 100%;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
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
