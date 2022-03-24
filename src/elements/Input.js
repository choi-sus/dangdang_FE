import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./Index";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value, radio ,name, _onClick, margin , _onFocus, _onBlur } = props;
  const styles = {margin};

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          row={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }
  
  if (radio) {
    return (
      <Grid width="300px">
        <ElRadio type="radio" name={name} value={value} onChange={_onClick}/>
        {label && <Text margin="0px">{label}</Text>}
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElInput {...styles} type={type} placeholder={placeholder} onChange={_onChange} onFous={_onFocus} onBlur={_onBlur}/>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  radio: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  name:"name",
  margin: false,
  _onChange: () => {},
  _onClick: () => {},
  _onFocus: () => {},
  _onBlur: () => {},
};
const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  height: 120px;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElRadio = styled.input`
  border: 1px solid #212121;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border: none;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  outline: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  border-radius: 25px;
  box-shadow: 0px 1px 4px rgb(158 158 158 / 25%);
  font-family: inherit;
  font-size: 16px;
  &::placeholder {
    color: #BDBDBD; font-family: inherit;
  }
`;

export default Input;
