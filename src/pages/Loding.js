import React from "react";
import {history} from "../redux/configStore"
import {Grid, Text} from "../elements/Index"
import styled from "styled-components";

const Loding = () => {

    // 3초 뒤 로그인으로 넘어가는 함수 작성
    const timeout = () => {
        setTimeout(() => {
            history.push("/login");
        }, 3000);
    };

    // 컴포넌트가 화면에 다 나타나면 timeout 함수 실행
    React.useEffect(() => {
        timeout();
        return () => {
        // clear 해줌
        clearTimeout(timeout);
        };
    });

    return(
        <Load>
            <Grid width="30%" height="auto" center>
                <img src="img/logo.jpg" alt="로고 이미지"></img>
                <Text bold>LOGO (3초 뒤 로그인 화면 가지롱)</Text>
            </Grid>
        </Load>
    )
}

export default Loding;

const Load = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
    }
`