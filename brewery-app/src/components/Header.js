import React, { useState } from 'react';
import SearchForm from './SearchForm';
import * as S from '../styles/HeaderStyles';
import { Link } from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleShowSearch = (e) => {
        if (e.target === e.currentTarget) {
            setShowSearch(!showSearch)            
        }
    }
    const hideSearch = (e) => {
        setShowSearch(false);
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
                    <S.NavButton onClick={toggleShowSearch}>
                        <Link to='/'>
                            <S.NavTitle onClick={toggleShowSearch}>
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
                
                

                <S.NavButton onClick={hideSearch}>
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