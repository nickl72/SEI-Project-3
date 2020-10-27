import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SearchForm from './SearchForm';
import MapContainer from './MapContainer';
import ResultsList from './ResultsList';

const Div = styled.div`
    display: flex;
`



const Homepage =() => {
    return (
        <div>
            <Link to='/about'>About Us</Link>
            <SearchForm />
            <Div>
                <ResultsList />    
                <MapContainer />

            </Div>
        </div>
    )
}

export default Homepage;