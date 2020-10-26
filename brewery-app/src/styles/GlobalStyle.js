import {css, keyframes, createGlobalStyle} from 'styled-components';
import { slideInDown } from 'react-animations';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #f9efc1;
  }

  header {
    display: flex;
  }

  h1 {
    margin: 20px;

  }

  .search-button {
    background: green;
    width: 50px;
    height: 50px;
  }
  .search-button:hover {
    background: red;
  }
`;