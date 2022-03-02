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
    success: (response) => {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (response) => {
          console.log(response)
          const kakaoEmail = response.kakao_account.email;
          const kakaoNickname = response.kakao_account.profile.nickname;
          api.post(`/users/social`,
            {email:kakaoEmail,
            nickname:kakaoNickname}
          )
          .then((res) => {
            console.log('토큰왔나요', res);
            const accessToken = "Bearer " + res.data.token;
            console.log(accessToken)
            setCookie('is_login', `${accessToken}`);
            // React.dispatch(userActions.setUser({email:kakaoEmail,
            //   nickname:kakaoNickname}))
            window.alert(res.data.success)
          })
          .catch((err) => {
                    console.log(err)
          });

        },
        fail: function (error) {
          console.log(error)
        },
      })
    },
    fail: function (error) {
      console.log(error)
    },
  })
}


const kakaoLogout = ()=> {
  if (window.Kakao.Auth.getAccessToken()) {
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response)
      },
      fail: function (error) {
        console.log(error)
      },
    })
    localStorage.clear();
    window.Kakao.Auth.setAccessToken(undefined)
  }
}  
const KakaoFunction = {
  KakaoLogin, kakaoLogout
}

export default KakaoFunction