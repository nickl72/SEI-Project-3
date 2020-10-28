import React from "react";
import { selectBrewery } from '../features/activeBrewerySlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import  * as S  from "../styles/ShowPageStyles";
import { Bold } from '../styles/GlobalStyle';

function ShowPage() {
    const brewery = useSelector(selectBrewery);

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

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
                            <p><Bold>Brewery Type:</Bold>{brewery.brewery_type}</p>
                        </div>
                        <div className ="Price">

                        </div>
                    </S.BreweryStats>
                    <S.BreweryContactInfo>
                        <ul>
                            <li><Bold>Address: </Bold>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code.substring(0,5)}</li>
                            <li><Bold>Phone: </Bold>{formatPhoneNumber(brewery.phone)}</li>
                            <li><Bold>Website: </Bold><a href={brewery.website_url} target="_blank" rel="noreferrer"> {brewery.website_url.replace("http://","")}</a></li>
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