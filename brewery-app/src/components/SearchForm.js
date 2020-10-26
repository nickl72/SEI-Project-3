import React, { useState } from 'react';

import * as S from '../styles/SearchFormStyles';
import axios from 'axios';
import MapContainer from './MapContainer';

const SearchForm = (props) => {
    const [searchData, setSearchData] = useState({
        // todo import states names to not need 50 lines
        city: '',
        state: '',
        zipCode: '',
        breweryName: '',
        breweryType: ''
    })

    const handleSearch = (e) => {
        e.preventDefault();
        // make sure spaces in city are replaced by underscores
        // make sure stae names use underscore 
        // make sure zip code is 5 digit number
        // make sure spaces in brewery name are replaced by underscores

        let searchURL = 'https://api.openbrewerydb.org/breweries?'

        if(searchData.city) {
            searchURL = searchURL + `&by_city=${searchData.city}`;
        }
        if(searchData.state !== 'State' &&
           searchData.state !== '') {
            searchURL = searchURL + `&by_state=${searchData.state}`;
        }
        if(searchData.zipCode) {
            searchURL = searchURL + `&by_postal=${searchData.zipCode}`;
        }
        if(searchData.breweryName) {
            searchURL = searchURL + `&by_name=${searchData.breweryName}`;
        }
        if(searchData.breweryType !== '') {
            searchURL = searchURL + `&by_type=${searchData.breweryType}`;
        }
        axios(searchURL).then(resp => props.sendResults({searchResults: resp.data}));
        
    }

    const handleInputChange = (e) => {
        searchData[e.target.name] = e.target.value
    }

    return (
        <S.StyledForm
            onSubmit={(e) => {handleSearch(e)}}
        >
            <S.FormTitle>Search for a Brewery by...</S.FormTitle>
            <S.FormInputs>
                <S.InputContainer>
                    <S.StyledInput 
                        type='text' 
                        name='city'
                        placeholder='City'
                        onChange={handleInputChange}
                        
                    />
                    <S.StyledSelect 
                        name='state'
                        onChange={handleInputChange}
                    > 
                        <option selected disabled hidden >State</option>
                        <option>Iowa</option>
                    </S.StyledSelect>
                    <S.StyledInput 
                        type='text' 
                        name='zipCode'
                        placeholder='Zip code'
                        onChange={handleInputChange}
                    />
                </S.InputContainer>
                <S.InputContainer>
                    <S.StyledInput 
                        type='text' 
                        name='breweryName'
                        placeholder='Brewery name'
                        onChange={handleInputChange}
                    />
                    <S.StyledSelect 
                        name='breweryType'
                        onChange={handleInputChange}
                    > 
                        <option selected disabled>Brewery type</option>
                        {/* todo, breweries must be of types:
                            micro, regional, brewpub, large, planning, bar, contract, proprietor
                        */}
                    </S.StyledSelect>
                    {/* todo per_page, sort by one or more fields */}

                </S.InputContainer>
                <S.StyledInput 
                    type='submit' 
                    value='Search'
                />
            </S.FormInputs>
        </S.StyledForm>
    )
}

export default SearchForm;