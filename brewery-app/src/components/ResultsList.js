import React from 'react';
import Result from './Result';
import  styled  from 'styled-components';
import { useSelector } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice';


const Div = styled.div` 
    border: solid 5px #6f3c05;
    height: 100%;
    width: 25%;
    background: #f2a743;
`

const ResultsList = () => {
    const searchResults = useSelector(selectBreweryList);
    return (
        <Div className='Result-list'>
            <h3>Search Results</h3>
            {searchResults && searchResults.map((result, index) => (
                <Result 
                    result={result} 
                    key={index} 
                /> 
            ))}
        </Div>
    )
}

export default ResultsList;