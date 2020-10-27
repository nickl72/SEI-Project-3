import Styled from "styled-components";


export const PageHeader = Styled.header`
    display: flex;
    justify-content: space-around;
    height: 10vh;
    width: 100%;
    min-height: 80px;
`

export const PageTitle = Styled.h1`
    margin: 20px;
    width: 40%;
`

export const NavBar = Styled.nav`
    height: 100%;
    width: 40%;
    display: flex;
    flex-flow: row nowrap;
`

export const SearchButtonContainer = Styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const NavButton = Styled.div`
    margin: 0;
    background: #fbdc81;
    height: 100%;
    width: 100%;
    &:hover {
        background: #e78c11;
    }
`

export const SearchFormAnchor = Styled.div`
    width: 100%;
    height: 0;
    display: flex;
`

export const NavTitle = Styled.h2`
    margin: 0;
    text-align: center;
    padding: 20px;
`
