import React from "react";
import { selectBrewery } from '../features/activeBrewerySlice';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import {ShowPageContainer, BreweryName, BrewImage, BrewStats, BrewDiv, Bold} from "../styles/BreweryDisplayStyle";


function ShowPage(props) {
    const brewery = useSelector(selectBrewery);

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    return(
        <div>
            {brewery.id 
            ?
                <ShowPageContainer>
                    <Link to='/'>Return to search results</Link>
                    <BreweryName>
                        <h1>{brewery.name}</h1>
                    </BreweryName>
                    <BrewImage />
                    <BrewStats>
                        <div className = "stars">

                        </div>
                        <div>
                            <p><Bold>Brewery Type:</Bold>{brewery.brewery_type}</p>
                        </div>
                        <div className ="Price">

                        </div>
                    </BrewStats>
                    <BrewDiv className="about">
                        <ul>
                            <li><Bold>Address: </Bold>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code.substring(0,5)}</li>
                            <li><Bold>Phone: </Bold>{formatPhoneNumber(brewery.phone)}</li>
                            <li><Bold>Website: </Bold><a href={brewery.website_url} target="_blank" rel="noreferrer"> {brewery.website_url.replace("http://","")}</a></li>
                        </ul>
                    </BrewDiv>
                    <BrewDiv className="Reviews">

                    </BrewDiv>
                </ShowPageContainer>
            : <Redirect to='/' />}
        </div>
    )
}

export default ShowPage;