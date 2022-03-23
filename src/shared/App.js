import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import styled from "styled-components";
import Loding from '../pages/Loding';
import GuideSlide from '../pages/GuideSlide';
import Main from "../pages/Main";
import Login from '../pages/Login';
import SignUp from "../pages/SignUp"
import UserFind from '../pages/UserFind';
import Walk from '../pages/Walk';
import WalkEnd from '../pages/WalkEnd';
import Guide from '../pages/Guide';
import GuideDetail from '../pages/GuideDetail';
import Profile from '../pages/Profile';
import ProfileWrite from '../pages/ProfileWrite';
import WalkList from '../pages/WalkList';
import WalkDetail from '../pages/WalkDetail';
import Icon from '../pages/icon';
import Kakao from './kakao';
import UserInfo from '../pages/UserInfo';
import ModifyPwd from '../pages/ModifyPwd';
import ModifyNick from '../pages/ModifyNick';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {getCookie} from "./Cookie";

function App() {
  const dispatch = useDispatch();
  const is_login = getCookie("is_login")? true : false;
  
    React.useEffect(() => {
      if(is_login){
        dispatch(userActions.loginCheckDB());
      }
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div className="App">
          <ConnectedRouter history={history}>
            <Route path="/" component={Loding} exact/>
            <Route path="/guideslide" component={GuideSlide} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/signup" component={SignUp} exact/>
            <Route path="/find" component={UserFind} exact/>
            <Route path="/main" exact component={Main}/>
            <Route path="/walk" exact component={Walk}/>
            <Route path="/walkend" exact component={WalkEnd}/>
            <Route path="/guide" exact component={Guide}/>
            <Route path="/guide/:_id" exact component={GuideDetail}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/profilewrite" exact component={ProfileWrite}/>
            <Route path="/walklist" exact component={WalkList}/>
            <Route path="/walkdetail/:id" exact component={WalkDetail}/>
            <Route path="/icon" exact component={Icon}/>
            <Route path="/kakao" component={Kakao}/>
            <Route path="/userinfo" exact component={UserInfo}/>
            <Route path="/modifypwd" exact component={ModifyPwd}/>
            <Route path="/modifynick" exact component={ModifyNick}/>
          </ConnectedRouter>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: url(img/web_bg.png) no-repeat center / cover;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 420px) {
    max-height: 100vh;
  }

  @media screen and (min-width: 1200px) {
    background-size: 100% 100vh;
  }

  .App{
    background: url(img/iphone_mockup.png) no-repeat center / cover;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-y: scroll;
    width: 100%;
    max-width: 420px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    @media screen and (min-width: 1024px) {
      position: relative;
      left: 25%;
      top: 0%;
      overflow: auto;
    }
  }
`;