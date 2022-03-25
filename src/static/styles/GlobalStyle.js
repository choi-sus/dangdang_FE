import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    font-family: "Godo", NotoSansKR, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
  }
  
`;

export default GlobalStyle;