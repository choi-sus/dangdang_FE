import React, { useEffect, useState } from "react";
import axios from "axios";

const Kakao = () => {
    let authorization_code = new URL(window.location.href).searchParams.get("code");

    const kakaoLogin = async (authorization_code) => {
            console.log('함수 호출되나 인가코드는', authorization_code);
            // await axios.get(``)
            //   .then((response) => {
            //     const token = response.data.data.token;
            //     const user = response.data.data.user;
            //     console.log("response 받음");
            //     console.log('유저', response.data);
            //   })
            //   .catch((error) => {
            //     console.log("카카오 로그인실패", error);
            //   });
          };

            useEffect(() => {
    kakaoLogin(authorization_code);
  }, []);

  return (
    <div>
      <h3>카카오 로그인 리다이렉트 페이지</h3>
    </div>
  );
}
export default Kakao;