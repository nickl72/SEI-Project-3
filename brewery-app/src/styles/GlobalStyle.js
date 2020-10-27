import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #f9efc1;
  }

  header {
    display: flex;
    justify-content: flex-start;
    height: 10vh;
    width: 100%;
    min-height: 80px;
    z-index: 2;
  }

  h1 {
    margin: 20px;
    width: 30%;
  }

  nav {
    height: 100%;
    width: 30%;
  }

  .search-button-container {
    height: 100%;

  }

  .search-button {
    background: #fbdc81;
    width: 50px;
    height: 100%;
    width: 30vw;

  }
  .search-button:hover {
    background: #e78c11;
  }

  h2 {
    margin: 0;
    text-align: center;
    padding: 20px;
  }

`;