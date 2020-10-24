import React, { useState } from 'react';

import { StyledForm, FormTitle, FormInputs, InputContainer, StyledInput, StyledSelect } from './SearchFormStyles';

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
        <StyledForm>
            <FormTitle>Search for a Brewery by...</FormTitle>
            <FormInputs>
                <InputContainer>
                    <StyledInput 
                        type='text' 
                        name='city'
                        placeholder='City'
                        onChange={handleInputChange}
                    />
                    <StyledSelect 
                        name='state'
                        onChange={handleInputChange}
                    > 
                        <option selected disabled hidden>State</option>
                        <option>Iowa</option>
                    </StyledSelect>
                    <StyledInput 
                        type='text' 
                        name='zipCode'
                        placeholder='Zip code'
                        onChange={handleInputChange}
                    />
                </InputContainer>
                <InputContainer>
                    <StyledInput 
                        type='text' 
                        name='breweryName'
                        placeholder='Brewery name'
                        onChange={handleInputChange}
                    />
                    <StyledSelect 
                        name='breweryType'
                        onChange={handleInputChange}
                    > 
                        <option selected disabled>Brewery type</option>
                        {/* todo, breweries must be of types:
                            micro, regional, brewpub, large, planning, bar, contract, proprietor
                        */}
                    </StyledSelect>
                    {/* todo per_page, sort by one or more fields */}

                </InputContainer>
                <StyledInput 
                    type='submit' 
                    value='Search'
                />
            </FormInputs>
        </StyledForm>
    )
}

export default SearchForm;