import React, { useState } from 'react';
import SearchForm from './SearchForm';
import * as S from '../styles/HeaderStyles';
import { Link } from 'react-router-dom';


const Header = () => {
    const [showSearch, setShowSearch] = useState(false)

    const toggleShowSearch = (e) => {
        if (e.target === e.currentTarget) {
            setShowSearch(!showSearch)
        }
    }

    return (
        <S.PageHeader>
            <S.PageTitle>
                <Link to='/'>Puzzles</Link>
            </S.PageTitle>
            <S.NavBar>
                <S.SearchButtonContainer>
                    <S.SearchButton 
                        className='search-button'
                        onClick={toggleShowSearch}
                    >
                        <S.NavTitle onClick={toggleShowSearch}>
                            Search breweries
                        </S.NavTitle>
                    </S.SearchButton>
                    <S.SearchFormAnchor>
                        { showSearch && <SearchForm /> }
                    </S.SearchFormAnchor>
                </S.SearchButtonContainer>
            </S.NavBar>
        </S.PageHeader>
    )
}

export default Header;