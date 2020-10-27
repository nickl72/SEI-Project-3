import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #f9efc1;
  }

  header {
    display: flex;
    justify-content: space-around;
    height: 10vh;
  }

  h1 {
    margin: 20px;
  }

  nav {
    height: 100%;
  }

  .search-button-container {
    height: 100%;
  }

  .search-button {
    background: green;
    width: 50px;
    height: 100%;
    width: 250px;

  }
  .search-button:hover {
    background: red;
  }

  h2 {
    margin: 0;
  }

`;