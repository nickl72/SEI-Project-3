import Styled from "styled-components";


export const PageHeader = Styled.header`
    display: flex;
    justify-content: space-around;
    height: 8vh;
    width: 100%;
    min-height: 80px;
    
    z-index: 200;
`
export const TitleDiv = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PageTitle = Styled.h1`
    margin: 20px;
    width: 40%;
`

export const PageIcon = Styled.img`
    height: 70px;
    widht: 70px;
    object-fit: cover;
`

export const NavBar = Styled.nav`
    height: 100%;
    width: 40%;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
`

export const SearchButtonContainer = Styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .slideForm-enter {
        opacity: 0.01;
        transform: translateY(-100%);
    }
      
    .slideForm-enter.slideForm-enter-active {
        opacity: 1;
        transform: translateY(0%);
        transition: all 500ms ease-in-out;
    }
      
    .slideForm-leave {
        opacity: 1;
        transform: translateY(0%);
    }
    
    .slideForm-leave.slideForm-leave-active {
        opacity: 0.01;
        transform: translateY(-100%);
        transition: all 300ms ease-in;
    }
`

export const NavButton = Styled.div`
    margin: 0;
    background: #f5c270;
    height: 100%;
    width: 100%;
    &:hover {
        background: #e78c11;
    }
    display: flex;
    align-items:center;
    justify-content: center;
`

export const SearchFormAnchor = Styled.div`
    width: 100%;
    height: 0;
    display: flex;
    

`

export const NavTitle = Styled.h2`
    margin: 0;
    text-align: center;
    padding: 25px;
`
