import axios from "axios";

const accessToken = document.cookie.split("=")[1];
// console.log(accessToken);

export const api = axios.create({
  baseURL: "https://dengroundserver.com/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});

export const api_token = axios.create({
  baseURL: "https://dengroundserver.com/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});