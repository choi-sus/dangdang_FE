import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {setCookie, deleteCookie } from "../../shared/Cookie";
import {api, api_token} from "../../shared/Api"
import jwt_decode from "jwt-decode";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const SET_KAKAO = "SET_KAKAO";

const setUser = createAction(SET_USER,(user)=> ({user}));
const logOut = createAction(LOG_OUT,(user)=>({user}));
const setKakao = createAction(SET_USER,()=> ({}));

const initialState = {
    user: null,
    is_login: false
}

const logInDB = (userID, password) =>{
    return async (dispatch, getState, { history }) => {
        await api.post(`/users/login`, {
            userID: userID,
            password: password
        }).then((res) => {
            const accessToken = "Bearer " + res.data.token;
            setCookie('is_login', `${accessToken}`);
            window.alert(res.data.success)
            window.location.replace("/main");
            const {userID, nickname} = jwt_decode(res.data.token)
            dispatch(
                setUser({
                    userID: userID,
                    nickname: nickname
                })
            )
        })
        .catch((err) => {
            window.alert(err.response.data.fail);
        })
    }
}
const signUpDB = (userID, email, nickname, password, confirmPassword) => {
   return async (dispatch, getState, { history }) => {
       await api.post(`/users/signup`,
       {
        userID: userID,
        email: email,
        nickname: nickname,
        password: password,
        confirmPassword: confirmPassword,
        })
        .then((res)=>{
            window.alert(res.data.success)
            history.replace("/login");
        })
        .catch((err)=>{
           window.alert(err.response.data.fail);
        })
   }
}

const loginCheckDB = () => {
    return async (dispatch, getState, { history }) => {
        await api_token.get(`/users/auth`)
        .then((res) => {
            dispatch(
                setUser({
                    userID: res.data.userID,
                    nickname: res.data.nickname
                })
            )
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

const idFindDB = (email) => {
    return async (dispatch, getState, { history }) => {
        await api.post(`/users/find`,
        {
         email: email
         })
         .then((res)=>{
            window.alert(res.data.success)
            history.replace("/login");
         })
         .catch((err)=>{
            window.alert(err.response.data.fail);
         })
    }
}

const pwdFindDB = (email, userID) => {
    return async (dispatch, getState, { history }) => {
        await api.post(`/users/find`,
        {
         email: email,
         userID: userID
         })
         .then((res)=>{
            window.alert(res.data.success)
            history.replace("/login");
         })
         .catch((err)=>{
            window.alert(err.response.data.fail);
         })
    }
}

const kakaoLoginDB  = (authorization_code) => {
    return async (dispatch, getState, { history }) => {
        await api.get(`auth/kakao/callback?code=${authorization_code}`)
            .then((res) => {
                const accessToken = "Bearer " + res.data.token;
                setCookie('is_login', `${accessToken}`);
                window.location.replace("/main");
                dispatch(setKakao())
            })
            .catch((error) => {
                console.log("카카오 로그인실패", error);
            });
    }
}

const modifyNickDB = (nickname) => {
    return async (dispatch, getState, { history }) => {
        await api.patch(`/users/modifyNic`,{
            nickname: nickname
        })
            .then((res) => {
                // console.log("닉네임 변경 성공", res)
            })
            .catch((err) => {
                console.log("닉네임 변경 실패", err);
            });
    }
}

const modifyPwdDB = (oldPwd,newPwd,confirmNewPwd) => {
    return async (dispatch, getState, { history }) => {
        await api.patch(`/users/modifyPW`,{
            password: oldPwd,
            newPassword: newPwd,
            confirmNewPassword: confirmNewPwd
        })
            .then((res) => {
                // console.log("비밀번호 변경 성공", res)
            })
            .catch((err) => {
                console.log("비밀번호 변경 실패", err);
            });
    }
}
export default handleActions ({
    [SET_USER]: (state, action) =>
    produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) =>
    produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [SET_KAKAO]: (state, action) =>
    produce(state, (draft) => {
        draft.is_login = true;
    }),
},
initialState
);

const actionCreators = {
    setUser,
    logOut,
    logInDB,
    signUpDB,
    loginCheckDB,
    idFindDB,
    pwdFindDB,
    kakaoLoginDB,
    setKakao,
    modifyNickDB,
    modifyPwdDB,
}

export {actionCreators}