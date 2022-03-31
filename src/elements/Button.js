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
  background-color: ${({ theme }) => theme.colors.main_2};
  color: ${({ theme }) => theme.colors.gray_5};
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  border-radius: 25px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.base};
  box-shadow: 0px 1px 4px rgb(158 158 158 / 25%);
`;

export default Button;