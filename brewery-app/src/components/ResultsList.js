import React from 'react';
import Result from './Result';
import  styled  from 'styled-components';

const fakeResults = [{
    address_2: null,
    address_3: null,
    brewery_type: "micro",
    city: "West Des Moines",
    country: "United States",
    county_province: null,
    created_at: "2018-07-24T01:33:24.495Z",
    id: 2817,
    latitude: "41.5936597",
    longitude: "-93.7489517002412",
    name: "Twisted Vine Brewery",
    phone: "5157202940",
    postal_code: "50266-1111",
    state: "Iowa",
    street: "3320 Westown Pkwy",
    updated_at: "2018-08-24T00:38:17.525Z",
    website_url: "http://www.twistedvinebrewery.com"
}]

const Div = styled.div` 
    border: 5px solid black;
    min-height: 80vh;
    min-width: 30vw;
    margin: 10px;
`

const ResultsList = (props) => {
    // const fakeResults = ['result1', 'result2'];
    console.log(props)

    return (
        <Div className='Result-list'>
            <h3>Search Results</h3>
            {props.searchResults.map((result, key) => <Result result={result} key={key}/> )}
            {props.results && props.results.map((result, key) => <Result result={result} key={key}/> )}
        </Div>
    )
}

export default ResultsList;