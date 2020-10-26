import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #f9efc1;
  }

  header {
    display: flex;
    height: 10vh;
  }

  h1 {
    margin: 20px;

  }

  .search-button {
    background: green;
    width: 50px;
    height: 100%;
  }
  .search-button:hover {
    background: red;
  }
`;