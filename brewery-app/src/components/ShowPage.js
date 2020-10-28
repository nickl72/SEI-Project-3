import React, { useEffect } from 'react';
import { selectBrewery } from '../features/activeBrewerySlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import * as S from "../styles/ShowPageStyles";
import * as G from '../styles/GlobalStyle';

function ShowPage() {
    const brewery = useSelector(selectBrewery);

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    const getPlaceData = () => {
        axios(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&input=exile+brewing,+Des+Moines,+Iowa&inputtype=textquery&fields=user_ratings_total,rating,price_level,place_id,photos`)
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => console.error(err));
    }


    useEffect(() => {
        console.log('use effect');
        getPlaceData();
    }, []);


    return (
        <S.ShowPage>
            {brewery.id 
            ?
                <S.ShowPageContainer>
                    <S.BreweryName>{brewery.name}</S.BreweryName>
                    <S.BreweryImage />
                    <S.BreweryStats>
                        <div className = "stars">

                        </div>
                        <div>
                            <p><G.Bold>Brewery Type: </G.Bold><G.Capitalize>{brewery.brewery_type}</G.Capitalize></p>
                        </div>
                        <div className ="Price">

                        </div>
                    </S.BreweryStats>
                    <S.BreweryContactInfo>
                        <ul>
                            <li><G.Bold>Address: </G.Bold>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code.substring(0,5)}</li>
                            <li><G.Bold>Phone: </G.Bold>{formatPhoneNumber(brewery.phone)}</li>
                            <li><G.Bold>Website: </G.Bold><a href={brewery.website_url} target="_blank" rel="noreferrer"> {brewery.website_url.replace("http://","")}</a></li>
                        </ul>
                    </S.BreweryContactInfo>
                    <S.BreweryReviews>

                    </S.BreweryReviews>
                </S.ShowPageContainer>
            : <Redirect to='/' />}
        </S.ShowPage>
    )
}

export default ShowPage;