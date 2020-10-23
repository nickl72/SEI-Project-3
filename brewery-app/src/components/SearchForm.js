import React, { useState } from 'react';

const SearchForm = () => {
    const [searchData, setSearchData] = useState({
        
    })

    return (
        <form>
            <h2>Search for a Brewery</h2>
            <input type='text' placeholder='Search by city' />
            <input type='text' placeholder='Search by city' />
            <input type='text' placeholder='Search by city' />
        </form>
    )

}

export default SearchForm;