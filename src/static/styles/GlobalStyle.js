import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../fonts/font.css"

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    margin: 0;
    padding: 0;
    font-family: "Godo", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
  }
  
`;

export default GlobalStyle;