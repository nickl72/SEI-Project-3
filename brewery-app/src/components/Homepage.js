import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MapContainer from './MapContainer';
import ResultsList from './ResultsList';
import { useSelector } from 'react-redux'
import { selectBreweryList } from '../features/breweryListSlice';

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
        <div>
            <Link to='/about'>About Us</Link>
            <SearchForm />
            <Div>
                <ResultsList />    
                <MapContainer searchResults={breweryList}/>
            </Div>
        </div>
    )
}

export default Homepage;