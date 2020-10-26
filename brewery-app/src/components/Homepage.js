import React from 'react'
import styled from 'styled-components';

import Header from './Header';
import MapContainer from './MapContainer';
import ResultsList from './ResultsList';
import { selectBreweryList } from '../features/breweryListSlice';
import { useSelector } from 'react-redux';

const Div = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 75vh;
    margin: 0 auto;
`



const Homepage =() => {
    const breweryList = useSelector(selectBreweryList);
    return (
        <Div>
            <ResultsList />    
            <MapContainer searchResults={breweryList}/>
        </Div>
    )
}

export default Homepage;