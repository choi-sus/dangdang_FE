import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, margin, padding, bg, children, center, _onClick, height, is_start } = props;

  const styles = {is_flex, width, margin, padding, bg, center, height, is_start};
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  is_start: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => props.is_flex ? `display: flex; align-items: center; justify-content: space-between;`: ""}
  ${(props) => props.is_start ? `display: flex; align-items: center; justify-content: flex-start;`: ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
