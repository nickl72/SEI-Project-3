import Styled from "styled-components";


export const ShowPage = Styled.div`
`

export const ShowPageContainer = Styled.div`
    display: flex;
    flex-flow: row wrap;
    // align-items: space-between;
    justify-content: space-around;
    margin: 0 auto;
`

export const BreweryName = Styled.h1`
    
`

export const BreweryImage = Styled.img`

`

export const BreweryStats = Styled.div`

`

export const BreweryInfoContainer = Styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: solid black 1px;
    width: 30%;
    height: 80vh;
    margin: 20px;
`

export const BreweryContactInfo = Styled.div`
`

export const BreweryReviews = Styled.ul`
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    height: 80vh;
    overflow: auto;
    padding-inline-start: 0px;
    border: solid black 1px;
    margin: 20px;
`