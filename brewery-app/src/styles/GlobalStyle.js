import Styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background: #f9efc1;
    height: 100%;
  }

  .App {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
  }

  a {
    color: #331a04;
    text-decoration: none
  }
  a:visited {
    color: #331a04;
  }

  #map {
    height: 100%;
  }
  
`

export const Bold = Styled.span`
    font-weight: bold;
`

export const Capitalize = Styled.span`
  text-transform: capitalize;
`
