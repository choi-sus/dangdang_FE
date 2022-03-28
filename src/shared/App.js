import React, { lazy, Suspense, useEffect } from 'react';
import { Route , Switch } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import {getCookie} from "./Cookie";

import Spinner from "../components/Spinner";

const Loding = lazy(() => import("../pages/Loding"));
const GuideSlide = lazy(() => import("../pages/GuideSlide"));
const Login = lazy(() => import("../pages/Login"));
const Kakao = lazy(() => import("./kakao"));
const SignUp = lazy(() => import("../pages/SignUp"));
const UserFind = lazy(() => import("../pages/UserFind"));
const Main = lazy(() => import("../pages/Main"));
const Walk = lazy(() => import("../pages/Walk"));
const WalkEnd = lazy(() => import("../pages/WalkEnd"));
const Guide = lazy(() => import("../pages/Guide"));
const GuideDetail = lazy(() => import("../pages/GuideDetail"));
const WalkList = lazy(() => import("../pages/WalkList"));
const WalkDetail = lazy(() => import("../pages/WalkDetail"));
const Profile = lazy(() => import("../pages/Profile"));
const ProfileWrite = lazy(() => import("../pages/ProfileWrite"));
const UserInfo = lazy(() => import("../pages/UserInfo"));
const ModifyNick = lazy(() => import("../pages/ModifyNick"));
const ModifyPwd = lazy(() => import("../pages/ModifyPwd"));
const NotFound = lazy(() => import("../pages/NotFound"));

function App() {
  const dispatch = useDispatch();
  const is_login = getCookie("is_login")? true : false;
  
    useEffect(() => {
      if(is_login){
        dispatch(userActions.loginCheckDB());
      }
  }, []);  

  return (
    <Container className='App'>
      <ConnectedRouter history={history}>
        <Suspense fallback={<Spinner />}>  
          <Switch>
            <Route path="/" component={Loding} exact/>
            <Route path="/guideslide" component={GuideSlide} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/kakao" component={Kakao}/>
            <Route path="/signup" component={SignUp} exact/>
            <Route path="/find" component={UserFind} exact/>
            <Route path="/main" exact component={Main}/>
            <Route path="/walk" exact component={Walk}/>
            <Route path="/walkend" exact component={WalkEnd}/>
            <Route path="/guide" exact component={Guide}/>
            <Route path="/guide/:_id" exact component={GuideDetail}/>
            <Route path="/walklist" exact component={WalkList}/>
            <Route path="/walkdetail/:id" exact component={WalkDetail}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/profilewrite" exact component={ProfileWrite}/>
            <Route path="/userinfo" exact component={UserInfo}/>
            <Route path="/modifynick" exact component={ModifyNick}/>
            <Route path="/modifypwd" exact component={ModifyPwd}/>
            <Route path="/a" exact component={Spinner}/>
            <Route exact component={NotFound} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;