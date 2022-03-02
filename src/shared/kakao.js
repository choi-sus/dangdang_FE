import React from "react";
import axios from "axios";
import {api, api_token} from "../shared/Api";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

// const REST_API_KEY = "e7e7a555f24784e43f5f6a91c16e3861";
// const REDIRECT_URI = "http://localhost:3000/"

window.Kakao.init("7c18ae3111a426ceb542f08d21e143b8");
// console.log(Kakao.isInitialized());

const KakaoLogin = ()=> {
  window.Kakao.Auth.login({
    success: (res) => {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoEmail = res.kakao_account.email;
          const kakaoNickname = res.kakao_account.profile.nickname;
          api.post(`/users/social`,
            {email:kakaoEmail,
            nickname:kakaoNickname}
          )
          .then((res) => {
            const accessToken = "Bearer " + res.data.token;
            setCookie('is_login', `${accessToken}`);
            // dispatch(userActions.setUser({email:kakaoEmail,
            //   nickname:kakaoNickname}))
            window.alert(res.data.success)
          })
          .catch((err) => {
                    console.log(err)
          });

        },
        fail: (err) => {
          console.log(err)
        },
      })
    },
    fail: (err) => {
      console.log(err)
    },
  })
}


const kakaoLogout = ()=> {
  if (window.Kakao.Auth.getAccessToken()) {
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: (res) => {
        console.log(res)
      },
      fail: (err) => {
        console.log(err)
      },
    })
    window.Kakao.Auth.setAccessToken(undefined)
  }
  localStorage.clear();
}  
const KakaoFunction = {
  KakaoLogin, kakaoLogout
}

export default KakaoFunction