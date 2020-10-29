import React from 'react';
import SearchForm from './SearchForm';
import * as S from '../styles/HeaderStyles';
import { Link } from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

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
                <S.TitleDiv>
                    <S.PageIcon src="./brew_puzzle.png" alt="Puzzles Icon" />
                    <S.PageTitle>
                        Puzzles
                    </S.PageTitle>
                </S.TitleDiv>
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
                    <CSSTransitionGroup
                        transitionName="slideForm"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        >
                            { showSearch && <SearchForm /> }
                    </CSSTransitionGroup>
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