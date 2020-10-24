import React from 'react'
import styled from 'styled-components';

import MapContainer from './MapContainer';
import ResultsList from './ResultsList';

const Div = styled.div`
    display: flex;
`

const Homepage =() => {
    return (
        <Div>
            {/* <SearchForm /> */}
            <ResultsList />
            <MapContainer />
        </Div>
    )
}

export default Homepage;