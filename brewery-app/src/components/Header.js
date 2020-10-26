import React, { useState } from 'react';
import SearchForm from './SearchForm';


const Header = () => {
    const [showSearch, setShowSearch] = useState(false)

    const toggleShowSearch = () => {
        console.log(showSearch);
        setShowSearch(!showSearch)
    }

    return (
        <header>
            <h1>Puzzles</h1>
            <nav>
                <div 
                    className='search-button'
                    onClick={toggleShowSearch}
                >
                    
                </div>
            </nav>
            { showSearch && <SearchForm /> }
        </header>
    )
}

export default Header;