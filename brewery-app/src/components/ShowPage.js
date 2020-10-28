import React, { useState, useEffect } from 'react';
import { selectBrewery } from '../features/activeBrewerySlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as S from "../styles/ShowPageStyles";
import * as G from '../styles/GlobalStyle';

function ShowPage() {
    const [placeId, setPlaceId] = useState(null)
    const [placeDetails, setPlaceDetails] = useState({
        place_id: '',
        name: '',
        rating: '',
        review: [],
        price_level: ''
    })

    const brewery = useSelector(selectBrewery);

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    const getPlaceData = () => {
        if( placeId ) {
            console.log(placeId);
            // eslint-disable-next-line no-undef
            let map = new google.maps.Map(document.getElementById("map"));
            
            var request = {
                placeId: placeId,
                fields: ['place_id', 'name', 'rating', 'review', 'price_level']
            };
            
            // eslint-disable-next-line no-undef
            let service = new google.maps.places.PlacesService(map);
            
            service.getDetails(request, (place, status) => {
                console.log(place);
                // eslint-disable-next-line no-undef
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setPlaceDetails(place);
                }
            })
        } else {
            getPlaceId();
        }
    }
    
    const getPlaceId = () => {
        // eslint-disable-next-line no-undef
        let map = new google.maps.Map(document.getElementById("map"));
        
        const request = {
            query: brewery.name,
            fields: ['name', 'place_id'],
        };
        
        // eslint-disable-next-line no-undef
        let service = new google.maps.places.PlacesService(map);
        
        service.findPlaceFromQuery(request, (place, status) => {
            console.log(place[0]);
            // eslint-disable-next-line no-undef
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                setPlaceId(place[0].place_id);
            }
        })
    }


    useEffect(() => {
        getPlaceData();
    }, [placeId]);


    return (
        <S.ShowPage>
            {brewery.id 
            ?
                <S.ShowPageContainer>
                    <div id="map"></div>
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