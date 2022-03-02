import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {setCookie, deleteCookie } from "../../shared/Cookie";
import {api, api_token} from "../../shared/Api"
import jwt_decode from "jwt-decode";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER,(user)=> ({user}));
const logOut = createAction(LOG_OUT,(user)=>({user}));

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
            history.replace("/");
            const {userID, nickname} = jwt_decode(res.data.token)
            dispatch(
                setUser({
                    userID: userID,
                    nickname: nickname
                })
            )
        })
        .catch((err) => {
            console.log(err)
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
            history.push("/login");
        })
        .catch((err)=>{
           console.log(err) 
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
            history.push("/login");
         })
         .catch((err)=>{
            console.log(err) 
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
            history.push("/login");
         })
         .catch((err)=>{
            console.log(err) 
         })
    }
}

export default handleActions ({
    [SET_USER]: (state, action) =>
    produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
        console.log("소셜로그인 디스패치확인하려고 달아둠")
    }),
    [LOG_OUT]: (state, action) =>
    produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
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
    pwdFindDB
}

export {actionCreators}