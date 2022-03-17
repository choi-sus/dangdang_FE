import React from "react";
import styled from "styled-components"
import { actionCreators as guideActions } from "../redux/modules/guide"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {Button, Grid, Input, Text} from "../elements/Index"
import {history} from "../redux/configStore";

const GuideDetail = (props) => {
    const id = props.match.params._id;
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(guideActions.guideDetailDB(id))
      },[]);

    const guide_detail = useSelector((state) => state.guide.detail)
    return(
        <DetailContainer>
            <Head>
                <Grid width="auto" _onClick={()=> {history.replace("/guide")}}>
                  <FontAwesomeIcon icon={faAngleLeft}/>
                </Grid>
                {guide_detail &&
                    <Text center color="#4F4F4F" size="18px">{guide_detail.guideTitle}</Text>
                }
            </Head>
            <DetailContent>
              {guide_detail &&
                  <img src={guide_detail.guideContentImage} alt="가이드 이미지"></img>
              }
              {guide_detail &&
                  guide_detail.guideContent.map((info, idx) => {
                      return (
                          <DetailContents key={idx}>
                              <ContentNum>{idx + 1}</ContentNum>
                              <TextContent>{info}</TextContent>
                          </DetailContents>
                      )
                  })
              }
            </DetailContent>
        </DetailContainer>
    )
}

export default GuideDetail

const DetailContainer = styled.div`
  background-color: #FFFBF1;
  padding: 15.5% 0;
  box-sizing: border-box;
  img {
      width: 100%;
      margin-bottom: 25px; 
      display: block;
  }
`

const Head = styled.div`
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 0 4.35%;
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

const DetailContent = styled.div`
  padding: 0 10.25%;
  box-sizing: border-box;
`

const DetailContents = styled.div`
    &::after {
        content: ""; display: block; visibility: hidden; clear: both;
    }
    &:not(:last-child){
      padding-bottom: 40px;
      overflow: hidden;
    }
    &:not(:last-child) span:after {
      content: "";
      width: calc(100% + 100px);
      height: 0px;
      border-bottom: 3px dashed #FFD04C;
      display: block;
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
      position: absolute;
      left: -50px;
      top: 95px;
    }
`

const ContentNum = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 32px;
    background-color: #FFD04C;
    border-radius: 50%;
    color: #fff;
    font-weight: 600;
    float: left;
    position: relative;
`

const TextContent = styled.p`
  float: right;
  width: calc(100% - 55px);
  margin: 0;
  line-height: 25px;
  color: #333;
`