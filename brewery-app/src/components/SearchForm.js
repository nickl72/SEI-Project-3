import React, { useState } from 'react';

import Styled from 'styled-components';

const StyledForm = Styled.form`
    border: solid black 5px;
    width: 80%;
    margin: 0 auto;
    padding: 5px;
`

const FormTitle = Styled.h2`
    text-align: center;
    margin: 0;
`

const FormInputs = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

const InputContainer = Styled.div`
    display: flex;
    flex-flow: column wrap;
`

const StyledInput = Styled.input`
    margin: 3px;
    width: 30vw;
`

const StyledSelect = Styled.select`
    margin: 5px;
    width: 30vw;
`


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