import React, {useEffect} from "react";
import styled from "styled-components"
import { actionCreators as guideActions } from "../redux/modules/guide"
import { useDispatch, useSelector } from "react-redux"
import {history} from "../redux/configStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Text} from "../elements/Index"
import { Link } from 'react-router-dom';

const Guide = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(guideActions.guideDB());
      },[]);

    const guide_list = useSelector((state) => state.guide.list);
    const rewalk = useSelector((state) => state.walk.pauseWalk);
    const nowLoca = rewalk.path;
    return(
        <GuideContainer>
            <Head>
                <Link to={{pathname:'/walk', state:{nowLoca, rewalk}}}>
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
  padding: 15.5% 0;
  box-sizing: border-box;
  height: inherit;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
      display: none;
  }
`
const Head = styled.div`
  margin-bottom: 40px;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.paddings.lg};
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > a {
    float: left;
  }
  & > p {
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeight.base};
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray_4};
  }
  svg{
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.gray_4};
    cursor: pointer;
  }
`

const GuideContent = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.xxxxl};
  box-sizing: border-box;

  &::after {
      content: ""; display: block; visibility: hidden; clear: both;
  }
`
const GuideInfo = styled.div`
    float: left;
    width: calc(50% - 8px);
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 9px rgba(207, 207, 207, 0.4);
    border-radius: 7px;
    box-sizing: border-box;
    padding: ${({ theme }) => theme.paddings.lg};
    cursor: pointer;

    &:nth-child(2n) {
      margin-left: ${({ theme }) => theme.margins.xxl};
    }
    &:nth-child(n+3) {
      margin-top: ${({ theme }) => theme.margins.xxl};
    }
    &:nth-child(2), &:nth-child(3), &:nth-child(6) {
        background-color: ${({ theme }) => theme.colors.main_2};
    }
    & > img {
      width: 100%;
      display: block;
    }
    p {
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &:nth-child(2) p, &:nth-child(3) p, &:nth-child(6) p {
      color: ${({ theme }) => theme.colors.gray_5};
    }
    &:last-child p {
      line-height: 40px;
    }
`