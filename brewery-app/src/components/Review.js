import React from 'react';
import * as R from '../styles/ReviewStyles';
import * as S from '../styles/ShowPageStyles';
import * as G from '../styles/GlobalStyle';


const Review = (props) => {
    let mugs = []
    for( let i = 0 ; i < props.review.rating ; i++) {
        mugs.push(<S.RatingIcon src = "/beer-mug_1f37a.png" alt='beer mug' />)
    };

    return (
        <R.StyledReview>
            <R.AuthorInfo>
                <R.AuthorProfilePhoto src={props.review.profile_photo_url} />
                <R.AuthorName>
                    {props.review.author_name}
                </R.AuthorName>
            </R.AuthorInfo>
            <R.ReviewInfo>
                <S.MugRating>
                    <p>
                        <G.Bold>Rating: </G.Bold>{props.review.rating}
                    </p>
                    <S.MugRack>
                        {mugs}
                    </S.MugRack>
                </S.MugRating>
                <R.ReviewText>
                    {props.review.text}
                </R.ReviewText>
                <R.RelativeTime>
                    {props.review.relative_time_description}
                </R.RelativeTime>
            </R.ReviewInfo>
        </R.StyledReview>
    )
}

export default Review