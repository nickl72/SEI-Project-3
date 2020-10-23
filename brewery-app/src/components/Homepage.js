import React from 'react'

import MapContainer from './components/MapContainer';


const Homepage =() => {
    return (
        <div>
            <SearchForm />
            <ResultsList />
            <MapContainer />
        </div>
    )
}

export default Homepage;