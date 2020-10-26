import React, {useState} from 'react'
import styled from 'styled-components';

import SearchForm from './SearchForm';
import MapContainer from './MapContainer';
import ResultsList from './ResultsList';

const Div = styled.div`
    display: flex;
`



const Homepage =() => {
    const [searchData, setSearchData] = useState({searchResults: []})
    const [activeBrewery, setActiveBrewery] = useState({location: null, index: null}) 


    console.log(searchData);

    return (
        <div>
            <SearchForm sendResults={setSearchData} />
            <Div>
                <ResultsList 
                    searchResults={searchData.searchResults} 
                    activeBrewery={activeBrewery} 
                    setActiveBrewery={setActiveBrewery}
                />
                <MapContainer /*BrewList={searchResults}*//>
            </Div>
        </div>
    )
}

export default Homepage;