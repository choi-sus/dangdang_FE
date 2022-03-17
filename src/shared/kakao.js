import React, { useEffect, useState } from "react";
import axios from "axios";
import {api} from "./Api";

const Kakao = () => {
  let authorization_code = new URL(window.location.href).searchParams.get("code");

  const kakaoLogin = async (authorization_code) => {
          // console.log('함수 호출되나 인가코드는', authorization_code);
          await api.get(`/kakao`)
            .then((response) => {
              // const token = response.data.data.token;
              // const user = response.data.data.user;
              // console.log("response 받음");
              console.log('유저', response);
            })
            .catch((error) => {
              console.log("카카오 로그인실패", error);
            });
        };

    useEffect(() => {
    kakaoLogin(authorization_code);
  }, []);

  return (
    <React.Fragment></React.Fragment>
  );
}
export default Kakao;