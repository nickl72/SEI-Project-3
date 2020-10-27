import React from 'react'
import styled from 'styled-components';

import SearchForm from './SearchForm';
import MapContainer from './MapContainer';
import ResultsList from './ResultsList';
import { selectBreweryList } from '../features/breweryListSlice';
import { useSelector } from 'react-redux';

const Div = styled.div`
    display: flex;
`



const Homepage =() => {
    const breweryList = useSelector(selectBreweryList);
    return (
        <div>
            <SearchForm />
            <Div>
                <ResultsList />    
                {/* <MapContainer searchResults={breweryList}/> */}

            </Div>
        </div>
    )
}

export default Homepage;