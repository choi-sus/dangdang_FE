import React ,{useState} from "react";
import styled from "styled-components"
import { actionCreators as guideActions } from "../redux/modules/guide"
import { useDispatch, useSelector } from "react-redux"
import {history} from "../redux/configStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {Grid, Text} from "../elements/Index"
import { Link } from 'react-router-dom';

const Guide = () => {
    const dispatch = useDispatch()

    const [nowLoca,setNowLoca] = useState();

    React.useEffect(()=>{
        dispatch(guideActions.guideDB())
      },[]);

    const guide_list = useSelector((state) => state.guide.list)
    const polylinePath = useSelector((state) => state.geolocation.polylinePath);
    const lastIndex = polylinePath[polylinePath.length - 1]
    setNowLoca(lastIndex);
    return(
        <GuideContainer>
            <Head>
                <Link to={{pathname:'/walk', state:{nowLoca}}}>
                  <FontAwesomeIcon icon={faAngleLeft}/>
                </Link>
                <Text center color="#4F4F4F" size="18px">가이드북</Text>
            </Head>
            <GuideContent>
            {guide_list &&
                guide_list.map((info, idx) => {
                    return (
                        <GuideInfo key={idx} onClick={()=> {history.replace(`/guide/${info._id}`);}}>
                            <img src={info.guideTitleImage} alt="가이드 이미지"></img>
                            <Text color="#4F4F4F" center size="16px" height="20px">{info.guideTitle}</Text>
                        </GuideInfo>
                    )
                })
            }
            </GuideContent>
        </GuideContainer>
    )
}

export default Guide

const GuideContainer = styled.div`
  background-color: #FFFBF1;
  padding: 15.5% 4.35%;
  box-sizing: border-box;
  @media screen and (min-height: 890px) {
    height: 100vh;
  }
`
const Head = styled.div`
  margin-bottom: 40px; 
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > div {
    float: left;
  }
  & > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.5px;
    color: #4F4F4F;
  }
  svg{
    font-size: 25px;
    color: #4F4F4F;
  }
`

const GuideContent = styled.div`
    &::after {
        content: ""; display: block; visibility: hidden; clear: both;
    }
`
const GuideInfo = styled.div`
    float: left;
    width: calc(50% - 8px);
    background-color: #FFFFFF;
    box-shadow: 0px 1px 9px rgba(207, 207, 207, 0.4);
    border-radius: 7px;
    box-sizing: border-box;
    padding: 15px;
    &:nth-child(2n) {
        margin-left: 16px;
    }
    &:nth-child(n+3) {
      margin-top: 16px;
    }
    &:nth-child(2), &:nth-child(3), &:nth-child(6) {
        background-color: #FFD04C;
    }
    & > img {
      width: 100%;
      display: block;
    }
    p {
      height: 40px;
    }
    &:nth-child(2) p, &:nth-child(3) p, &:nth-child(6) p {
      color: #333;
    }
    &:last-child p {
      line-height: 40px;
    }
`