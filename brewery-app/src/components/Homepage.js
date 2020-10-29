import React from 'react'
import styled from 'styled-components';

import MapContainer from './MapContainer';
import ResultsList from './ResultsList';

const Div = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    height: 75vh;
    margin: 0 auto;
`

const Homepage =() => {
    return (
        <Div>
            <ResultsList />    
            <MapContainer />
        </Div>
    )
}

export default Homepage;