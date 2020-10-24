import React, { useState } from 'react';

import * as S from './SearchFormStyles';

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
        <S.StyledForm>
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
                        <option selected disabled hidden>State</option>
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