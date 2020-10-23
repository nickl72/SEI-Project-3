import React, { useState } from 'react';

const SearchForm = () => {
    const [searchData, setSearchData] = useState({
        
    })

    return (
        <form>
            <h2>Search for a Brewery by...</h2>
            <input type='text' placeholder='City' />
            <select >
                <option selected disabled hidden>State</option>
                <option>Iowa</option>
            </select>
            <input type='text' placeholder='Zip code' />
            <input type='text' placeholder='Brewery name' />
            <select >
                <option selected disabled hidden>Brewery type</option>
                {/* todo, breweries must be of types:
                    micro, regional, brewpub, large, planning, bar, contract, proprietor
                */}
            </select>
            {/* todo per_page, sort by one or more fields */}

            <input type='submit' value='Search' />
        </form>
    )

}

export default SearchForm;