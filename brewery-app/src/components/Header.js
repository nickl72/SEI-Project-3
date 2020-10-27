import React, { useState } from 'react';
import SearchForm from './SearchForm';


const Header = () => {
    const [showSearch, setShowSearch] = useState(false)

    const toggleShowSearch = (e) => {
        if (e.target === e.currentTarget) {
            setShowSearch(!showSearch)
        }
    }

    return (
        <header>
            <h1>Puzzles</h1>
            <nav>
                <div className='search-button-container'>
                    <div 
                        className='search-button'
                        onClick={toggleShowSearch}
                    >
                        <h2>Search breweries</h2>
                    </div>
                    <div>
                        { showSearch && <SearchForm /> }
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;