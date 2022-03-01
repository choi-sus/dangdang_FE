import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import Header from '../components/Header';
import Main from "../pages/Main";
import Login from '../pages/Login';
import SignUp from "../pages/SignUp"
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
        </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
