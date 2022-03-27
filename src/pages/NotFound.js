import React from "react";
import styled from "styled-components"
import {Button, Grid, Text} from "../elements/Index"
import { useHistory } from "react-router-dom";
import { notfound } from "../static/images";

const NotFound = (props) => {
    let history = useHistory();
    return (
        <NotContainer>
            <Grid center>
            <img src={notfound} alt="notfound" />
                <Text color="#ffd04c" size="27px" bold>error</Text>
            </Grid>
            <Grid center>
                <Text margin="16px" color="#bdbdbd">화면을 불러오지 못했어요</Text>
                <Button width="calc(100% - 80px)" margin= "0 40px"_onClick={()=> {history.replace("/main")}} text="메인으로 돌아가기"></Button>
            </Grid>
        </NotContainer>
    );
};
  
export default NotFound;

const NotContainer = styled.div`
    height: inherit;
    div:nth-child(1) {
        position: absolute;
        top: 40%;
    }
    div:nth-child(2) {
        position: absolute;
        top: 80%;
    }
`;

  