import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import Header from '../components/Header';
import Main from "../pages/Main";
import Login from '../pages/Login';
import SignUp from "../pages/SignUp"
import UserFind from '../pages/UserFind';
import Kakao from './Kakao';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {getCookie} from "./Cookie"

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
        <ConnectedRouter history={history}>
          <Header></Header>
          <Route path="/" exact component={Main}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/find" component={UserFind}/>
          <Route path="/oauth" component={Kakao}/>
        </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;

// 네이티브 앱 키	61f2a57d1c69f6a1eab69bcaec2110ed
// REST API 키	e7e7a555f24784e43f5f6a91c16e3861
// JavaScript 키	7c18ae3111a426ceb542f08d21e143b8
// Admin 키	7e7d19688d3064b40a72bd143aea8d13