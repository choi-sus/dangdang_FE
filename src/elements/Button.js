import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick, children, margin, width, padding} = props;

    const styles = {
      margin: margin,
      width: width,
      padding: padding,
    };

    return (
      <React.Fragment>
        <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
      </React.Fragment>
    );
}

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: '100%',
  padding: "15px 0px",
}

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #FFD04C;
  color: #333;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  border-radius: 25px;
  font-family: inherit;
  font-size: 16px;
`;

export default Button;