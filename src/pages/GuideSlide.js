import React, { useState } from "react";
import styled from 'styled-components'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {Pagination} from "swiper";
import {Button} from "../elements/Index";
import {history} from "../redux/configStore"
import {slide_guide, slide_home, slide_walk} from "../static/images";

const GuideSlide = (props) => {
    const [swiper, setSwiper] = useState(null);

    SwiperCore.use([Pagination]);
    const swiperOption = {
        pagination: true, // swiper option
        onSwiper: setSwiper,
    }

    return (
        <React.Fragment>
            <StyledSwiper {...swiperOption} ref={setSwiper}>
                <SwiperSlide>
                    <ImgArea className="ImgArea"></ImgArea>
                    <SlideBtn>시작하기</SlideBtn>
                </SwiperSlide>
                <SwiperSlide>
                    <ImgArea className="ImgArea"></ImgArea>
                    <SlideBtn>시작하기</SlideBtn>
                </SwiperSlide>
                <SwiperSlide>
                    <ImgArea className="ImgArea"></ImgArea>
                    <SlideBtn className="start" onClick={()=> {history.replace("/login")}}>시작하기</SlideBtn>
                </SwiperSlide>
            </StyledSwiper>
        </React.Fragment>
    )
}

export default GuideSlide

const StyledSwiper = styled(Swiper)`
    height: inherit;
    .swiper-pagination{
        top: 30px; height: 20px;
    }
    .swiper-pagination-bullet{
        width: 8px; height: 8px; background-color: #C4C4C4; margin: 0 5px !important;
    }
    .swiper-pagination-bullet-active{
        background-color: ${({ theme }) => theme.colors.main_2};
    }
    & .swiper-slide:nth-child(1) > .ImgArea{
        background-image: url(${slide_home});
    }
    & .swiper-slide:nth-child(2) > .ImgArea{
        background-image: url(${slide_walk});
    }
    & .swiper-slide:nth-child(3) > .ImgArea{
        background-image: url(${slide_guide});
    }
`

const ImgArea = styled.div`
    background-position: center;
    display: block;
    background-size: contain;
    width: 100%;
    height: calc(100% - 70px);
    background-color: #585754;
    background-repeat: no-repeat;
`

const SlideBtn = styled.div`
    text-align: center;
    height: 70px;
    line-height: 60px;
    background-color: #D8D9DA;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    &.start{
        background-color: ${({ theme }) => theme.colors.main_2};
        color: ${({ theme }) => theme.colors.gray_5};
        cursor: pointer;
    }
`