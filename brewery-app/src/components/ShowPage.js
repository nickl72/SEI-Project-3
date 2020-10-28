import React, { useState, useEffect } from 'react';
import { selectBrewery } from '../features/activeBrewerySlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as S from "../styles/ShowPageStyles";
import * as G from '../styles/GlobalStyle';

function ShowPage() {
    const [placeId, setPlaceId] = useState(null)
    const [placeDetails, setPlaceDetails] = useState(null)

    const brewery = useSelector(selectBrewery);

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    const getPlaceData = () => {
        if( placeId ) {
            // eslint-disable-next-line no-undef
            let map = new google.maps.Map(document.getElementById("map"));
            
            var request = {
                placeId: placeId,
                fields: ['place_id', 'name', 'rating', 'review', 'price_level']
            };
            
            // eslint-disable-next-line no-undef
            let service = new google.maps.places.PlacesService(map);
            
            service.getDetails(request, (place, status) => {
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
                    {placeDetails
                    &&
                        <S.BreweryStats>
                            {placeDetails.rating 
                            &&
                                <div className = "stars">
                                    Rating: {placeDetails.rating}
                                </div>
                            }
                            <div>
                                <p><G.Bold>Brewery Type: </G.Bold><G.Capitalize>{brewery.brewery_type}</G.Capitalize></p>
                            </div>
                            {placeDetails.price_level 
                            &&
                                <div className ="Price">
                                    Price Level: {placeDetails.price_level}
                                </div>
                            }
                        </S.BreweryStats>
                    }
                    <S.BreweryContactInfo>
                        <ul>
                            {brewery.street
                            &&
                                <li><G.Bold>Address: </G.Bold>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code.substring(0,5)}</li>
                            }
                            {brewery.phone
                            &&
                                <li><G.Bold>Phone: </G.Bold>{formatPhoneNumber(brewery.phone)}</li>
                            }
                            {brewery.website_url
                            &&
                                <li><G.Bold>Website: </G.Bold><a href={brewery.website_url} target="_blank" rel="noreferrer"> {brewery.website_url.replace("http://","")}</a></li>
                            }
                        </ul>
                    </S.BreweryContactInfo>
                    <S.BreweryReviews>
                        {placeDetails.reviews 
                        &&
                            <ul className='reviews'>
                                {placeDetails.reviews.map(review => {
                                    console.log(review);
                                })}
                            </ul>
                        }
                    </S.BreweryReviews>
                </S.ShowPageContainer>
            : <Redirect to='/' />}
        </S.ShowPage>
    )
}

export default ShowPage;