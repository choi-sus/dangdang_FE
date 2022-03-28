import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import {history} from "../redux/configStore"

const Kakao = () => {
  const dispatch = useDispatch();
  let authorization_code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    dispatch(userActions.kakaoLoginDB(authorization_code))
  }, []); 
  return (
    <React.Fragment></React.Fragment>
  )
}
export default Kakao;

