import React, { useEffect } from 'react';
import { selectBrewery } from '../features/activeBrewerySlice';
import { selectPlaceDetails, setPlaceDetails, selectBreweryId, setBreweryId, forgetPlaceDetails } from '../features/activeBreweryPlaceDetailsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as S from "../styles/ShowPageStyles";
import * as G from '../styles/GlobalStyle';

import Review from './Review';
import Carousel from 'react-elastic-carousel';

function ShowPage() {
    const dispatch = useDispatch();
    const brewery = useSelector(selectBrewery);
    const placeBreweryId = useSelector(selectBreweryId);
    const placeDetails = useSelector(selectPlaceDetails);

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    const getPlaceData = () => {
        if( placeDetails.place_id && placeBreweryId === brewery.id ) {
            console.log('alls good!');
        } else if ( placeDetails.place_id && !placeBreweryId ) {            
            console.log('getPlaceData have place ID ' + placeDetails.place_id );
            // eslint-disable-next-line no-undef
            let map = new google.maps.Map(document.getElementById("map"));
            
            var request = {
                placeId: placeDetails.place_id,
                fields: ['place_id', 'name', 'rating', 'review', 'price_level', 'photo']
            };
            
            // eslint-disable-next-line no-undef
            let service = new google.maps.places.PlacesService(map);
            
            service.getDetails(request, (place, status) => {
                // eslint-disable-next-line no-undef
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    console.log('&&&&&&&&&&&&&&&&&&&&' + place.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}));
                    dispatch(setPlaceDetails(place));
                    dispatch(setBreweryId(brewery.id));
                }
            })
        } else {
            dispatch(forgetPlaceDetails());

            getPlaceId();
        }
    }
    
    const getPlaceId = () => {
        if(brewery.id) {
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
                    dispatch(setPlaceDetails({place_id: place[0].place_id}));
                }
            })
        }
    }


    useEffect(() => {
        getPlaceData();
    }, [placeDetails.place_id]);


    return (
        <S.ShowPage>
            <div id="map"></div>
            {brewery.id 
            ?
                <S.ShowPageContainer>
                    <S.BreweryInfoContainer>
                        <S.BreweryName>{brewery.name}</S.BreweryName>
                        {placeDetails
                        &&
                            <div>
                                {(placeDetails && placeDetails.reviews)
                                &&
                                <S.BreweryPhotos>
                                    <Carousel itemsToShow={1}>
                                        {placeDetails.photos.map((photo, id) =>
                                            <S.BreweryImage src={photo.getUrl({'maxHeight': 300})} key={id} />
                                        )}
                                    </Carousel>
                                </S.BreweryPhotos>
                                }
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
                                </div>
                        }
                        <S.BreweryContactInfo>

                            <ul>
                                {brewery.street
                                &&
                                    <li>
                                        <G.Bold>Address: </G.Bold>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code.substring(0,5)}
                                    </li>
                                }
                                {brewery.phone
                                &&
                                    <li>
                                        <G.Bold>Phone: </G.Bold>{formatPhoneNumber(brewery.phone)}
                                    </li>
                                }
                                {brewery.website_url
                                &&
                                    <li>
                                        <G.Bold>Website: </G.Bold><a href={brewery.website_url} target="_blank" rel="noreferrer"> {brewery.website_url.replace("http://","")}</a>
                                    </li>
                                }
                            </ul>
                        </S.BreweryContactInfo>

                    </S.BreweryInfoContainer>
                        {(placeDetails && placeDetails.reviews)
                        &&
                        <S.BreweryReviews>
                                {placeDetails.reviews.map((review, id) =>
                                    <Review review={review} key={id} />
                                )}
                        </S.BreweryReviews>
                        }
                </S.ShowPageContainer>
            : <Redirect to='/' />}
        </S.ShowPage>
    )
}

export default ShowPage;