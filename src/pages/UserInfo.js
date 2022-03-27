import React,{useEffect} from "react";
import styled from "styled-components";
import { Grid, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const UserInfo = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  const user = useSelector((state)=> state.user.user);
  
  return (
    <UserContainer>
      <Head>
        <Grid width="auto" _onClick={()=> {history.replace("/profile")}}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </Grid>
          <Text center color="#4F4F4F" size="18px">회원정보</Text>
      </Head>
      <InfoWrap>
        <div>
            <p>아이디</p>
            <p>{user && user.userID}</p>
        </div>
        <div>
            <p>이메일</p>
            <p>{user && user.email}</p>
        </div>
        <div>
          <div>
            <p>닉네임</p>
            <p>{user && user.nickname}</p>
          </div>
            <div> 
              <p>변경하기</p>
              {user && (
                <Link to={{pathname:'/modifynick', state:{nickname:user.nickname}}}>
                  <FontAwesomeIcon icon={faAngleRight}/>
                </Link>
              )}
            </div>
        </div>
        <div>
            <p>비밀번호</p>
            <div>
              <p>변경하기</p>
              <FontAwesomeIcon icon={faAngleRight} onClick={()=> {history.replace("/modifypwd")}}/>
            </div>
        </div>
      </InfoWrap>
    </UserContainer>
  )
}

export default UserInfo;

const UserContainer = styled.div`
  padding: 15.5% 0;
  box-sizing: border-box;
  height: inherit;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Head = styled.div`
  margin-bottom: 25px;
  padding: 0 ${({ theme }) => theme.paddings.lg};
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > div {
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
`;

const InfoWrap = styled.div`
  padding: 1px 30px;
  div {
    display: flex;
    padding: ${({ theme }) => theme.paddings.xxxl} 0;
  }
  p:nth-child(1) {
    width: 70px;
    color: ${({ theme }) => theme.colors.gray_3};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    div{
      padding: 0;
    }
    p {
      width: 70px;
      color: ${({ theme }) => theme.colors.gray_3};
    }
    p:nth-child(2) {
      color: ${({ theme }) => theme.colors.gray_5};
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
    div:nth-child(2) {
      display: flex;
      text-align: right;
      align-items: center;
      p {
      color: ${({ theme }) => theme.colors.gray_3};
      font-size: ${({ theme }) => theme.fontSizes.base};
      }
      svg {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        margin: 0 ${({ theme }) => theme.margins.base};
        color: ${({ theme }) => theme.colors.gray_3};
        cursor: pointer;
      }
    }
  }
  div:nth-child(4) {
    display: flex;
    justify-content: space-between;
    p {
      width: 70px;
      color: ${({ theme }) => theme.colors.gray_3};
    }
    div {
      display: flex;
      text-align: right;
      justify-content: flex-end;
      align-items: center;
      padding:  0;
      p{
        font-size: ${({ theme }) => theme.fontSizes.base};
      }
      svg {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        margin: 0 ${({ theme }) => theme.margins.base};
        color: ${({ theme }) => theme.colors.gray_3};
        cursor: pointer;
      }
    }
  }
`;