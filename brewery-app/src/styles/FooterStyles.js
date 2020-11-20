import styled from "styled-components";

export const FooterDiv = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 5vh;
    min-height: 50px;
    font-size: 12px;
    text-align: center;
`

export const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    p {
        margin: 2px;
        text-align: center;
    }
`
export const Note = styled.p`
    font-weight: bold;
    font-style: italic;
`

export const Bold = styled.span`
    font-weight: bold;
`

export const ExternalLink = styled.a`
    text-decoration: none;
`