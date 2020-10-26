import React, { useState } from 'react';

import * as S from '../styles/SearchFormStyles';
import axios from 'axios';
import StateNames from '../stateNames';

import { useDispatch } from 'react-redux'
import { loadResults } from '../features/breweryListSlice'

const SearchForm = (props) => {
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState({
        city: '',
        state: '',
        zipCode: '',
        breweryName: '',
        breweryType: '',
        resultsPerPage: 10,
        resultPage: 1
    })

    const [errorMessage, setErrorMessage] = useState({
        zipCodeMessage: null
    })

    const handleSearch = (e) => {
        e.preventDefault();
        axios(buildSearchUrl())
        .then(resp => dispatch(loadResults(resp.data)))
        .catch(err => console.error(err));
    }

    const buildSearchUrl = () => {
        let searchURL = `https://api.openbrewerydb.org/breweries?per_page=${searchData.resultsPerPage}&page=${searchData.resultPage}`

        if(searchData.city) {
            searchURL = searchURL + `&by_city=${searchData.city}`;
        }
        if(searchData.state !== 'Any' &&
           searchData.state !== '') {
            searchURL = searchURL + `&by_state=${searchData.state}`;
        }
        if(searchData.zipCode) {
            if (!isValidZipCode()) {
                setErrorMessage({zipCodeMessage: 'please input up to five numbers'})
            } else {
                setErrorMessage({zipCodeMessage: null})
                searchURL = searchURL + `&by_postal=${searchData.zipCode}`;
            }
        }
        if(searchData.breweryName) {
            searchURL = searchURL + `&by_name=${searchData.breweryName}`;
        }
        if(searchData.breweryType !== 'All' &&
           searchData.breweryType !== '') {
            searchURL = searchURL + `&by_type=${searchData.breweryType}`;
        }

        searchURL = searchURL + `&sort=-name`

        return searchURL;
    }

    const isValidZipCode = () => {
        if (searchData.zipCode) {
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
                        <option>Any</option>
                        {StateNames.Names.map((state, id) => (
                            <option key={id}>{state}</option>
                        ))}
                    </S.StyledSelect>
                    {errorMessage.zipCodeMessage && 
                        <S.ErrorMessage message={errorMessage.zipCodeMessage}>
                            {errorMessage.zipCodeMessage}
                        </S.ErrorMessage>
                    }
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
                    />
                    <S.StyledSelect 
                        name='breweryType'
                        onChange={handleInputChange}
                    > 
                        <option selected disabled hidden>Brewery type</option>
                        <option >All</option>
                        <option >Micro</option>
                        <option >Regional</option>
                        <option >Brewpub</option>
                        <option >Large</option>
                        <option >Contract</option>
                        <option >Proprietor</option>
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