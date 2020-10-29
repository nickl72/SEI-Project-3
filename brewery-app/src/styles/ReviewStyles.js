import Styled from "styled-components";


export const StyledReview = Styled.div`
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    background: #f5c270;
    margin: 5px auto;
    padding: 5px;
    border: 2px solid #331a04;
    box-shadow: 2px 2px 10px 2px grey;

`

export const AuthorInfo = Styled.div`
    width: 20%;
    height: 100%;
    padding: 25px 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const AuthorProfilePhoto = Styled.img`
    width: 70px;
`

export const AuthorName = Styled.p`
    font-weight: bold;
    text-align: center;

`

export const ReviewInfo = Styled.div`
    width: 60%;
    height: 100%;
    padding: 15px;
`

export const Rating = Styled.p`
`

export const ReviewText = Styled.p`
`

export const RelativeTime = Styled.p`
`