import React, {useState} from "react";
import styled from "styled-components";
// import Header from "./Header";
// import Footer from ".Footer";

import {ShowPageContainer, BreweryName, BrewImage, BrewStats, BrewDiv, Bold} from "../styles/BreweryDisplaySyle";

const brewery = {
    id: 299,
    name: "Almanac Beer Company",
    brewery_type: "micro",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    postal_code: "94501-5047",
    country: "United States",
    longitude: "-122.306283180899",
    latitude: "37.7834497667258",
    phone: "4159326531",
    website_url: "http://almanacbeer.com",
    updated_at: "2018-08-23T23:24:11.758Z"
}

function ShowPage(props) {
    const [showpageData, setShowpageData] = useState({
        brewery: brewery
    })

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    return(
        <div>
            {/* <Header /> */}
            <ShowPageContainer>
                <BreweryName>
                    <h1>{showpageData.brewery.name}</h1>
                </BreweryName>
                <BrewImage />
                <BrewStats>
                    <div className = "stars">

                    </div>
                    <div>
                        <p><Bold>Brewery Type:</Bold>{showpageData.brewery.brewery_type}</p>
                    </div>
                    <div className ="Price">

                    </div>
                </BrewStats>
                <BrewDiv className="about">
                    <ul>
                        <li><Bold>Address: </Bold>{showpageData.brewery.street}, {showpageData.brewery.city}, {showpageData.brewery.state} {showpageData.brewery.postal_code.substring(0,5)}</li>
                        <li><Bold>Phone: </Bold>{formatPhoneNumber(showpageData.brewery.phone)}</li>
                        <li><Bold>Website: </Bold><a href={showpageData.brewery.website_url} target="_blank"> {showpageData.brewery.website_url.replace("http://","")}</a></li>
                    </ul>
                </BrewDiv>
                <BrewDiv className="Reviews">

                </BrewDiv>
            </ShowPageContainer>
            {/* <Footer /> */}
        </div>
    )
}

export default ShowPage;