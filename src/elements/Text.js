import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, _onClick, right, center } = props;

  const styles = {bold: bold, color: color, size: size, margin, right, center};
  return (
      <P {...styles} onClick={_onClick}>
          {children}
      </P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  right: false,
  center: false,
  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : `margin: 0;`)}
  ${(props) => (props.right ? `text-align: right;` : "")}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Text;
