import React from 'react';
import * as S from '../styles/ReviewStyles';


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
                <img src={"./beer-mug_1f37a.png"} />
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