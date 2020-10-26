import React, {useState} from 'react'
import styled from 'styled-components';

import SearchForm from './SearchForm';
import MapContainer from './MapContainer';
import ResultsList from './ResultsList';

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
    const [searchData, setSearchData] = useState({searchResults: []})
    const [activeBrewery, setActiveBrewery] = useState({location: null, index: null}) 


    console.log(searchData.searchResults);

    return (
        <div>
            <SearchForm sendResults={setSearchData} />
            <Div>
                <ResultsList 
                    searchResults={searchData.searchResults} 
                    activeBrewery={activeBrewery} 
                    setActiveBrewery={setActiveBrewery}
                />
                <MapContainer searchResults={searchData.searchResults}/>
            </Div>
        </div>
    )
}

export default Homepage;