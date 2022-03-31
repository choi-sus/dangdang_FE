import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./Index";

const Input = (props) => {
  const { label, placeholder, _onChange, type, margin , _onFocus, _onBlur } = props;
  const styles = {margin};

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElInput {...styles} type={type} placeholder={placeholder} onChange={_onChange} onFocus={_onFocus} onBlur={_onBlur}/>
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
  font-size: ${({ theme }) => theme.fontSizes.base};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_2};
    font-family: inherit; 
  }
`;

export default Input;
