import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #f9efc1;
    height: 100%;
  }

  .App {
    display: flex;
    flex-flow: column nowrap;
  }

  main {
    height: 90vh;
  }
`