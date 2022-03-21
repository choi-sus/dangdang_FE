import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const Kakao = () => {
  const dispatch = useDispatch();
  let authorization_code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    // console.log("카카오페이지로 왔니", authorization_code);
    dispatch(userActions.kakaoLoginDB(authorization_code))
  }, []); 
  return (
    <React.Fragment></React.Fragment>
  )
}
export default Kakao;

