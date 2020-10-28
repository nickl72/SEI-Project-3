import React from 'react';
import SearchForm from './SearchForm';
import * as S from '../styles/HeaderStyles';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectShowSearch, showSearch, hideSearch } from '../features/showSearchFormSlice';


const Header = () => {
    const dispatch = useDispatch();
    const showingSearch = useSelector(selectShowSearch)

    const showForm = () => {
        dispatch(showSearch());
    }
    const hideForm = () => {
        dispatch(hideSearch());
    }

    return (
        <S.PageHeader>
            <Link to='/'>
                <S.PageTitle>
                    Puzzles
                </S.PageTitle>
            </Link>
            <S.NavBar>
                <S.SearchButtonContainer>
                    <S.NavButton onClick={ showingSearch ? hideForm : showForm}>
                        <Link to='/'>
                            <S.NavTitle onClick={showForm}>
                                Search breweries
                            </S.NavTitle>
                        </Link>
                    </S.NavButton>
                    <S.SearchFormAnchor>
                        { showingSearch && <SearchForm /> }
                    </S.SearchFormAnchor>
                </S.SearchButtonContainer>
                
                <S.NavButton onClick={hideForm}>
                    <Link to='/about'>
                        <S.NavTitle>
                            About Us
                        </S.NavTitle>
                    </Link>
                </S.NavButton>

            </S.NavBar>
        </S.PageHeader>
    )
}

export default Header;