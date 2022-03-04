import axios from "axios";

const accessToken = document.cookie.split("=")[1];

export const api = axios.create({
  baseURL: "http://52.79.133.77:4200/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});

export const api_token = axios.create({
  baseURL: "http://52.79.133.77:4200/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});