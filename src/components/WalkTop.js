import React from "react";
import styled from "styled-components"
import {Text} from "../elements/Index"
import { marker_brown, marker_danger, marker_water, marker_yellow } from "../static/images";

const WalkTop = (props)=> {
    const SetNum = props.setChange

    return(
        <IconContent>
            <IconArea onClick={()=> {SetNum.SetWeter(SetNum.water + 1)}}>
              <IconInner>
                <img src={marker_water} alt="식수 아이콘" />
                  <Text color="#828282" size="14px" margin="0 3px 0 0" height="20px">식수</Text>
                  <IconNum>{SetNum.water}</IconNum>
              </IconInner>
            </IconArea>
            <IconArea onClick={()=> {SetNum.SetYellow(SetNum.yellow + 1)}}>
              <IconInner>
                <img src={marker_yellow} alt="소변 아이콘" />
                <Text color="#828282" size="14px" margin="0 3px 0 0" height="20px">소변</Text>
                <IconNum>{SetNum.yellow}</IconNum>
              </IconInner>
            </IconArea>
            <IconArea onClick={()=> {SetNum.SetBrown(SetNum.brown + 1)}}>
              <IconInner>
                <img src={marker_brown} alt="대변 아이콘" />
                <Text color="#828282" size="14px" margin="0 3px 0 0" height="20px">대변</Text>
                <IconNum>{SetNum.brown}</IconNum>
              </IconInner>
            </IconArea>
            <IconArea onClick={()=> {SetNum.SetDanger(SetNum.danger + 1)}}>
              <IconInner>
                <img src={marker_danger} alt="위험구간 아이콘" />
                <Text color="#828282" size="14px" margin="0 3px 0 0" height="20px">위험</Text>
                <IconNum>{SetNum.danger}</IconNum>
              </IconInner>
            </IconArea>
        </IconContent>
    )
}

export default WalkTop

const IconContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 140px;
  z-index: 5;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box; 
  
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
`
const IconArea = styled.div`
  width: calc(25% - 7.5px);
  float: left;
  padding: 6px 0 3px;
  border-radius: 30px;
  box-shadow: 0 1px 3px 0 rgb(118 118 118 / 50%);
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;

  &:not(:first-child){
    margin-left: ${({ theme }) => theme.margins.base};
  }
  img {
    height: 20px; width: 20px; float: left;
  }
  p {
    float: left;
  }
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
`

const IconInner = styled.div`
  display: inline-block;
`

const IconNum = styled.span`
  float: left;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray_3};
  line-height: 20px;
`