import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import Loding from '../pages/Loding';
import Main from "../pages/Main";
import Login from '../pages/Login';
import SignUp from "../pages/SignUp"
import UserFind from '../pages/UserFind';
import Walk from '../pages/Walk';
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
          <Route path="/" component={Loding} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={SignUp} exact/>
          <Route path="/find" component={UserFind} exact/>
          <Route path="/main" exact component={Main}/>
          <Route path="/walk" exact component={Walk}/>
        </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;