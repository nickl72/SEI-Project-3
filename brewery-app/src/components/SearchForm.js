import React, { useState } from 'react';

const SearchForm = () => {
    const [searchData, setSearchData] = useState({
        // todo import states names to not need 50 lines
        city: '',
        state: '',
        zipCode: '',
        breweryName: '',
        breweryType: ''
    })

    const handleInputChange = (e) => {
        searchData[e.target.name] = e.target.value
    }

    return (
        <form>
            <h2>Search for a Brewery by...</h2>
            <input 
                type='text' 
                name='city'
                placeholder='City'
                onChange={handleInputChange}
            />
            <select 
                name='state'
                onChange={handleInputChange}
            > 
                <option selected disabled hidden>State</option>
                <option>Iowa</option>
            </select>
            <input 
                type='text' 
                name='zipCode'
                placeholder='Zip code'
                onChange={handleInputChange}
            />
            <input 
                type='text' 
                name='breweryName'
                placeholder='Brewery name'
                onChange={handleInputChange}
            />
            <select 
                name='breweryType'
                onChange={handleInputChange}
            > 
                <option selected disabled>Brewery type</option>
                {/* todo, breweries must be of types:
                    micro, regional, brewpub, large, planning, bar, contract, proprietor
                */}
            </select>
            {/* todo per_page, sort by one or more fields */}

            <input 
                type='submit' 
                value='Search'
            />
        </form>
    )

}

export default SearchForm;