import React, { useState } from "react";
import styled from 'styled-components'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {Pagination} from "swiper";
import {Button} from "../elements/Index";
import {history} from "../redux/configStore"

const GuideSlide = () => {
    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Pagination]);
    const swiperOption = {
        pagination: true,
        onSwiper: setSwiper,
    }
    return (
        <React.Fragment>
            <StyledSwiper {...swiperOption} ref={setSwiper}>
                <SwiperSlide>
                    <ImgArea></ImgArea>
                </SwiperSlide>
                <SwiperSlide>
                    <ImgArea></ImgArea>
                </SwiperSlide>
                <SwiperSlide>
                    <ImgArea></ImgArea>
                    <Button margin="0" width="35%" _onClick={()=> {history.replace("/login")}} text="시작하기"></Button>
                </SwiperSlide>
            </StyledSwiper>
        </React.Fragment>
    )
}

export default GuideSlide

const StyledSwiper = styled(Swiper)`
    .swiper-pagination{
        top: 30px; height: 20px;
    }
    .swiper-pagination-bullet{
        width: 8px; height: 8px; background-color: #C4C4C4; margin: 0 5px !important;
    }
    .swiper-pagination-bullet-active{
        background-color: #FFD04C;
    }
    & .swiper-slide:nth-child(1) > div{
        background-image: url('img/home.PNG');
    }
    & .swiper-slide:nth-child(2) > div{
        background-image: url('img/walk.PNG');
    }
    & .swiper-slide:nth-child(3) > div{
        background-image: url('img/guide.PNG');
    }
    button {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 60px;
        box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
        background-color: #ffd04c;
    }
`

const ImgArea = styled.div`
    background-position: center;
    display: block;
    background-size: cover;
    width: 100%;
    height: 100vh;
`