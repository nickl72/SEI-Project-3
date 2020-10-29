import Styled from "styled-components";


export const ShowPage = Styled.div`
`

export const ShowPageContainer = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 0 auto;
`

export const BreweryName = Styled.h1`
    text-align: center;
    color: #331a04;

`

export const BreweryPhotos = Styled.div`
    display: flex;
    flex-flow: row nowrap;
    overflow: auto;
    height: 40vh;

    // react-elastic-carousel styling
    .rec.rec-arrow {
        border-radius: 0;
        background: #fbdc81;
    }
    .rec.rec-arrow:hover {
        border-radius: 0;
        background: #e78c11;

    }
    .rec.rec-arrow:disabled {
        visibility: hidden;
    }
    .rec-carousel-item:focus {
        outline: none;
        box-shadow: inset 0 0 1px 1px lightgrey;
    }
    .rec.rec-dot {
        box-shadow: 0 0 1px 2px #331a04;
    }
    .rec.rec-dot_active {
        background: #f5c270;
        box-shadow: 0 0 1px 3px #532b04;

    }
`

export const BreweryImage = Styled.img`

`

export const BreweryStats = Styled.div`
    text-align: center;
    margin: 10px;
`

export const BreweryInfoContainer = Styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 35%;
    height: 80vh;
    margin: 20px;
    color: #331a04;

`

export const BreweryContactInfo = Styled.ul`
    width: 50%;
    margin: 0 auto;
    list-style-type: none;
    padding-inline-start: 0px;

`

export const BreweryReviews = Styled.ul`
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    height: 80vh;
    overflow: auto;
    padding-inline-start: 0px;
    margin: 20px;
    color: #331a04;

`

