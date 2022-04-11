<h1 align="left"> 🐕 산책이 똑똑해지는 순간, 댕댕한바퀴</h1>
<br>
<p align='center'>
  <img width='70%' src='https://user-images.githubusercontent.com/97425636/161515470-0888cf20-6adb-446e-b05b-362a2a292b31.PNG'>
</p>
<p align='center'>
  <img src='https://img.shields.io/badge/React-v17.0.2-blue?logo=React'/>
  <img src='https://img.shields.io/badge/ReactRouter-v5.2.1-pink?logo=React Router'/>
  <img src='https://img.shields.io/badge/StyledComponents-v^5.1.0-violet?logo=styled-components'/>
  <img src='https://img.shields.io/badge/Redux-v4.1.2-764ABC?logo=Redux'/>
  <img src='https://img.shields.io/badge/Axios-v0.26.0-pink?'/>
  <br>
  <img src='https://img.shields.io/badge/CloudFront-red?'/>
  <img src="https://img.shields.io/badge/Route53-E68B49">
  <img src="https://img.shields.io/badge/AWS S3-569A31">
</p>
<br>


## 📍 바로가기
- 사이트 바로가기 : https://denground.com
- 프론트엔드 GitHub Repository : https://github.com/choi-sus/dangdang_FE
- 백엔드 GitHub Respository : https://github.com/spirit-B/dangdang_BE
- 프로젝트 발표 영상 : https://youtu.be/0JcDixFHq-c
- <details>
  <summary> 프로젝트 시연 영상</summary>
  <br>
  
  https://user-images.githubusercontent.com/97425636/162681642-9d3d3816-a727-4a9c-8cea-e5751234fb88.mp4
  
</details>

<br>

## 🗓 프로젝트 기간
- 2022년 2월 25일 ~ 4월 8일 (6주)

<br>

## 🐶 댕댕한바퀴 소개
### 
- 반려견과의 산책 경험에 도움을 주는 서비스를 제공하고자 시작하게 된 프로젝트로, 카카오 지도를 기반으로 한 경로 기록을 통해 산책 기록과 산책 가이드 기능 구현에 힘을 쏟았으니, 그 부분을 중점적으로 봐주시면 좋을 것 같습니다 :)

<br>

## 📌 주요 기능
### 1. 사용자 위치 확인/ 날씨 확인
> + Kakao Maps API의 geolocation을 이용해 GPS 기능으로 사용자의 현재 위치를 표시합니다.
> + Openweathermap API를 이용해 현재 사용자가 있는 지역의 지명과 기온, 날씨를 보여줍니다.
> <details>
>  <summary>  산책 전, 내가 산책을 하는 지역의 이름과 날씨, 기온이 홈 화면에 표시됩니다.</summary>
>  <br>
>  <img width='300px' src='https://user-images.githubusercontent.com/97425636/161939888-c68ccb9a-bc30-46d9-ba55-72498c9eac45.PNG'>
> </details>

### 2. 실시간 산책 경로 기록
> + Kakao Maps API의 geolocation으로 5초마다 사용자의 위치를 위 · 경도값을 저장합니다.
> + Kakao Maps API의 Polyline을 이용하여 사용자의 실시간 산책경로를 선으로 그려냅니다.
> <details>
>  <summary>  카카오 지도를 기반으로 실시간 경로를 기록하고, 식수, 소변, 대변, 위험구간 4가지의 지표 또한 기록됩니다.</summary>
>  <br>
>
>  <img width='300px' src='https://user-images.githubusercontent.com/97425636/161521356-18af7359-42c3-4b17-adfa-d2e1bd532eaf.PNG'>
> </details>

### 3. 산책 일지
> + 서버에서 전송 받은 데이터 중 전체 위 · 경도값을 받아 Kakao Maps API를 이용해 지도를 나타냅니다.
> + Kakao Maps API의 Polyline을 이용하여 사용자의 실시간 산책경로를 선으로 그려냅니다.
> <details>
>   <summary>산책 경로가 저장되어 지난 산책의 경로, 4가지 지표, 산책 시간, 산책 거리 등을 확인할 수 있습니다.</summary>
>   <br>
>   <img width='300px' src='https://user-images.githubusercontent.com/97425636/161521375-6c58c412-8f57-4e2f-aef9-7b2346b93a06.PNG'>
> </details>

### 4. 돌발 가이드 시스템
> <details>
>   <summary>산책 중 돌발상황에 대처하기 위한 산책 가이드를 제시합니다.</summary>
>   <br>
>   <img width='300px' src='https://user-images.githubusercontent.com/97425636/161521366-722d51b4-f418-47bb-81e3-bec3c737db18.PNG'>
> </details>

<br>


## 🏛 프로젝트 구조

<details markdown="1">
  <summary>서비스 아키텍처</summary>
  <br>
  <img width="70%" src="https://user-images.githubusercontent.com/97425636/161782356-f04b5e61-5211-4eca-b338-d6b8357fdb84.PNG">
</details>

<details markdown="2">
  <summary>API 명세서</summary>
  <br>
  <img width="650px" alt="스크린샷 2022-04-05 오후 9 34 44" src="https://user-images.githubusercontent.com/97425636/161757957-d4122d8f-7117-41ec-88e3-b70a6f86bd68.png">
  <img width="650px" alt="스크린샷 2022-04-05 오후 9 36 01" src="https://user-images.githubusercontent.com/97425636/161758708-d9fd4867-47d2-48de-b649-d695561c1efe.png">
  <img width="650px" alt="스크린샷 2022-04-05 오후 9 37 06" src="https://user-images.githubusercontent.com/97425636/161758776-4e4dc203-70bb-4f9d-895e-6ce43a29d703.png">
  <img width="650px" alt="스크린샷 2022-04-05 오후 9 33 40" src="https://user-images.githubusercontent.com/97425636/161758851-e1712c27-1c00-47ed-8b78-686b38c6ffa0.png">
</details>

<br>

## 💠 프론트엔드 기술 스택
<p align="center">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=github actions&logoColor=white">  
<br>
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Axios-pink?style=for-the-badge&logo=Axios&logoColor=black">
<br>
<img src="https://img.shields.io/badge/CloudFront-D05C4B?style=for-the-badge&logo=CloudFront&logoColor=white">
<img src="https://img.shields.io/badge/Route53-E68B49?style=for-the-badge&logo=Route53s&logoColor=white">
<img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=S3&logoColor=white">
<br>
<br>
<br>

## 🃏 팀원소개

| Name     | GitHub & Email                     | Position  |
| -------- | ---------------------------------- | --------- |
| 최연서🔰   | https://github.com/choi-sus        | 프론트엔드   |
| 정혜인     | https://github.com/h-cir           | 프론트엔드  |
| 반장훈🔰   | https://github.com/spirit-B        | 백엔드     |
| 나기탁     | https://github.com/nagitak         | 백엔드     |
| 이동주     | https://github.com/DZOOOOO         | 백엔드     |
| 심호선     | simho763@naver.com                 | 디자인     |
| 엄세희     | ltqmmt.sh@gmail.com                | 디자인     |

<br>
