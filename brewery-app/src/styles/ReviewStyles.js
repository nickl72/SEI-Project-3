import Styled from "styled-components";


export const StyledReview = Styled.div`
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    background: #f5c270;
    margin: 5px auto;
    padding: 5px;
    border: 2px solid #331a04;
    box-shadow: 2px 2px 10px 2px grey;

`

export const AuthorInfo = Styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 5px;

`

export const AuthorProfilePhoto = Styled.img`
    width: 125px;
    padding: 10px;
`

export const AuthorName = Styled.p`
    font-weight: bold;
    text-align: center;

`

export const ReviewInfo = Styled.div`
    width: 65%;
    height: 100%;
    padding: 10px;
`

export const Rating = Styled.p`
`

export const ReviewText = Styled.p`
    width: 100%;
`

export const RelativeTime = Styled.p`
    font-weight: bold;
`