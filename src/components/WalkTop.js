import React from "react";
import styled from "styled-components"
import {Text} from "../elements/Index"

const WalkTop = (props)=> {
    const SetNum = props.setChange

    return(
        <IconContent>
            <IconArea onClick={()=> {SetNum.SetWeter(SetNum.water + 1)}}>
              <IconInner>
                  <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5147 33.5164C20.9803 34.684 18.0209 34.684 15.4865 33.5164C3.28716 27.896 4.62523 13.1883 19.5007 0.172755C34.3758 13.1883 35.714 27.896 23.5147 33.5164Z" fill="#87BAFF"/>
                  </svg>
                  <Text color="#828282" size="14px" margin="0 3px 0 0" height="20px">물</Text>
                  <IconNum>{SetNum.water}</IconNum>
              </IconInner>
            </IconArea>
            <IconArea onClick={()=> {SetNum.SetYellow(SetNum.yellow + 1)}}>
              <IconInner>
                <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5147 33.5164C20.9803 34.684 18.0209 34.684 15.4865 33.5164C3.28716 27.896 4.62523 13.1883 19.5007 0.172755C34.3758 13.1883 35.714 27.896 23.5147 33.5164Z" fill="#FFEA7A"/>
                </svg>
                <Text color="#828282" size="14px" margin="0 3px 0 0" height="20px">소변</Text>
                <IconNum>{SetNum.yellow}</IconNum>
              </IconInner>
            </IconArea>
            <IconArea onClick={()=> {SetNum.SetBrown(SetNum.brown + 1)}}>
              <IconInner>
                <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.3338 15.0013C19.3883 12.5895 20.1999 5.32885 21.4739 2C11.5464 2.37685 11.927 11.1386 13.3582 15.4724C10.1497 15.2463 8.18372 16.0063 7.60178 16.4145C3.2986 19.9946 5.24258 23.873 6.75247 25.3647C4.56628 25.1763 0.156146 25.9489 0.00515683 30.5464C-0.145832 35.144 3.05639 36.7645 4.67637 37H32.8452C38.0543 36.7739 39.1364 32.6034 39.0263 30.5464C39.3283 26.0619 34.4337 25.2234 31.9487 25.3647C33.7606 24.611 33.9934 21.9417 33.8833 20.7012C34.2607 19.8062 33.2793 17.4132 26.3338 15.0013Z" fill="#FFBC7F"/>
                </svg>
                <Text color="#828282" size="14px" margin="0 3px 0 0" height="20px">대변</Text>
                <IconNum>{SetNum.brown}</IconNum>
              </IconInner>
            </IconArea>
            <IconArea onClick={()=> {SetNum.SetDanger(SetNum.danger + 1)}}>
              <IconInner>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.64 5.15049L27.3514 20.0319C28.6033 22.1693 27.9884 24.9813 25.9773 26.312C25.3023 26.7603 24.5155 26.9992 23.7114 27H6.28741C3.92011 27 2 24.96 2 22.4413C2 21.5893 2.2249 20.7559 2.6474 20.0319L11.36 5.15049C12.6106 3.01314 15.2548 2.35847 17.2659 3.68915C17.8223 4.05715 18.2929 4.55716 18.64 5.15049ZM15 21.6666C15.3448 21.6666 15.6755 21.5261 15.9193 21.2761C16.1631 21.026 16.3 20.6869 16.3 20.3333C16.3 19.9797 16.1631 19.6405 15.9193 19.3905C15.6755 19.1404 15.3448 18.9999 15 18.9999C14.6553 18.9999 14.3246 19.1404 14.0808 19.3905C13.837 19.6405 13.7 19.9797 13.7 20.3333C13.7 20.6869 13.837 21.026 14.0808 21.2761C14.3246 21.5261 14.6553 21.6666 15 21.6666ZM15 9.66653C14.6553 9.66653 14.3246 9.80701 14.0808 10.0571C13.837 10.3071 13.7 10.6462 13.7 10.9999V16.3332C13.7 16.6869 13.837 17.026 14.0808 17.2761C14.3246 17.5261 14.6553 17.6666 15 17.6666C15.3448 17.6666 15.6755 17.5261 15.9193 17.2761C16.1631 17.026 16.3 16.6869 16.3 16.3332V10.9999C16.3 10.6462 16.1631 10.3071 15.9193 10.0571C15.6755 9.80701 15.3448 9.66653 15 9.66653Z" fill="#FF9696"/>
                </svg>
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
  background-color: #fff;
  box-sizing: border-box;
  text-align: center;
  &:not(:first-child){
    margin-left: 10px;
  }
  svg {
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
  font-size: 14px;
  color: #828282;
  line-height: 20px;
`