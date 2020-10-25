import React, {useState} from 'react'
import styled from 'styled-components';

import SearchForm from './SearchForm';
import MapContainer from './MapContainer';
import ResultsList from './ResultsList';

const Div = styled.div`
    display: flex;
`

const Homepage =() => {
    const [searchData, setSearchData] = useState({
        searchResults: []
    })

    console.log(searchData);

    return (
        <div>
            <SearchForm sendResults={setSearchData} />
            <Div>
                <ResultsList searchResults={searchData.searchResults} />
                <MapContainer />
            </Div>
        </div>
    )
}

export default Homepage;