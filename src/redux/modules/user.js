import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import {api, api_token} from "../../shared/Api"

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
            dispatch(setUser())
            window.alert(res.data.success)
            console.log(res.data)
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
},
initialState
);

const actionCreators = {
    setUser,
    logOut,
    logInDB,
    signUpDB,
    loginCheckDB,
}

export {actionCreators}