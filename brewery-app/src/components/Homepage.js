import React from 'react'
import styled from 'styled-components';

import SearchForm from './SearchForm';
import MapContainer from './MapContainer';
import ResultsList from './ResultsList';

const Div = styled.div`
    display: flex;
`



const Homepage =() => {

    return (
        <div>
            <SearchForm />
            <Div>
                <ResultsList />
                <MapContainer /*BrewList={searchResults}*//>
            </Div>
        </div>
    )
}

export default Homepage;