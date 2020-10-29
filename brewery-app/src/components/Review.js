import React from 'react';

import * as S from '../styles/ReviewStyles';

// author_name: "Dean Ahles"
// author_url: "https://www.google.com/maps/contrib/101440542195116051017/reviews"
// language: "en"
// profile_photo_url: "https://lh3.googleusercontent.com/-KpV-RjIKumk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclMdALlVsCnYt6LmTdVbXjwn82QAA/s128-c0x00000000-cc-rp-mo/photo.jpg"
// rating: 3
// relative_time_description: "a month ago"
// text: "Steak was tough, food was not hot."


const Review = (props) => {
    return (
        <S.StyledReview>
            <S.AuthorInfo>
                <S.AuthorProfilePhoto src={props.review.profile_photo_url} />
                <S.AuthorName>
                    {props.review.author_name}
                </S.AuthorName>
            </S.AuthorInfo>
            <S.ReviewInfo>
                <S.Rating>
                    {props.review.rating}
                </S.Rating>
                <S.ReviewText>
                    {props.review.text}
                </S.ReviewText>
                <S.RelativeTime>
                    {props.review.relative_time_description}
                </S.RelativeTime>
            </S.ReviewInfo>
        </S.StyledReview>
    )
}

export default Review