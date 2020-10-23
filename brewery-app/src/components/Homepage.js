import React from 'react'

import SearchForm from './SearchForm';
import MapContainer from './MapContainer';


const Homepage =() => {
    return (
        <div>
            <SearchForm />
            {/* <ResultsList /> */}
            <MapContainer />
        </div>
    )
}

export default Homepage;