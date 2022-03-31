import axios from "axios";

const accessToken = document.cookie.split("=")[1];

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

// export const instance = axios.create({
//   baseURL: "https://dengroundserver.com/",
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     accept: "application/json,",
//     authorization: `${accessToken}`,
//   },
// });

// instance.interceptors.request.use(
//   function (config) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//     console.log("엑세스 토큰이야",`${accessToken}`)
//     return config;
//   },
//   function (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// // instance token refresh
// instance.interceptors.response.use(
//   (response) => {
//     console.log(response,"여긴 토큰 리프레쉬")
//     return response;
//   },
//   (error) => {
//     console.log("error", error.config, error.response);
//     const {
//       config,
//       response: { status },
//     } = error;

//     const originalRequest = config;

//     if (status === 401) {
//       console.log("401error", config);
//       const refreshToken = `Bearer  ${accessToken}`;

//       originalRequest.headers = { Authorization: refreshToken };
//       console.log("나 여깄어", originalRequest, originalRequest.headers);
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );