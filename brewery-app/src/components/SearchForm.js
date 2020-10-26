import React, { useState } from 'react';

import * as S from '../styles/SearchFormStyles';
import axios from 'axios';
import StateNames from '../stateNames';

const SearchForm = (props) => {
    const [searchData, setSearchData] = useState({
        city: '',
        state: '',
        zipCode: '',
        breweryName: '',
        breweryType: ''
    })

    const [errorMessage, setErrorMessage] = useState({
        zipCodeMessage: null
    })

    const handleSearch = (e) => {
        e.preventDefault();

        let searchURL = 'https://api.openbrewerydb.org/breweries?'

        if(searchData.city) {
            searchURL = searchURL + `&by_city=${searchData.city}`;
        }
        if(searchData.state !== 'State' &&
           searchData.state !== '') {
            searchURL = searchURL + `&by_state=${searchData.state}`;
        }
        if(searchData.zipCode) {
            if (!isValidZipCode()) {
                console.log("baddddddddddd zip!");
                setErrorMessage({zipCodeMessage: 'please input up to five numbers'})
            } else {
                setErrorMessage({zipCodeMessage: null})
                searchURL = searchURL + `&by_postal=${searchData.zipCode}`;
            }
        }
        if(searchData.breweryName) {
            searchURL = searchURL + `&by_name=${searchData.breweryName}`;
        }
        if(searchData.breweryType !== '') {
            searchURL = searchURL + `&by_type=${searchData.breweryType}`;
        }
        axios(searchURL).then(resp => props.sendResults({searchResults: resp.data}));

    }

    const isValidZipCode = () => {
        if (searchData.zipCode) {
            // return /^\d{5}(-\d{4})?$/.test(searchData.zipCode);
            return /^\d{0,5}$/.test(searchData.zipCode);
        } else {
            return false;
        }
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
                        // defaultValue='#option-tag' // todo get rid of warning by using this
                    > 
                        <option selected disabled hidden>State</option>
                        {StateNames.Names.map((state, id) => (
                            <option key={id}>{state}</option>
                        ))}
                        {/* <option>Iowa</option> */}
                    </S.StyledSelect>
                    {errorMessage.zipCodeMessage && <p>{errorMessage.zipCodeMessage}</p>}
                    <S.StyledInput 
                        type='text' 
                        name='zipCode'
                        placeholder='Zip code'
                        onChange={handleInputChange}
                        message={errorMessage.zipCodeMessage}
                    />
                </S.InputContainer>
                <S.InputContainer>
                    <S.StyledInput 
                        type='text' 
                        name='breweryName'
                        placeholder='Brewery name'
                        onChange={handleInputChange}
                        message={errorMessage.zipCodeMessage}
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