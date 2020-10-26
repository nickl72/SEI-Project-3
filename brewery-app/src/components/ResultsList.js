import React from 'react';
import Result from './Result';
import  styled  from 'styled-components';
import { useSelector } from 'react-redux';
import { selectBreweryList } from '../features/brewerySlice';


const Div = styled.div` 
    border: 5px solid black;
    min-height: 80vh;
    min-width: 30vw;
    margin: 10px;
`

const ResultsList = (props) => {
    const searchResults = useSelector(selectBreweryList);
    return (
        <Div className='Result-list'>
            <h3>Search Results</h3>
            {searchResults.map((result, index) => (
                <Result 
                    result={result} 
                    key={index} 
                /> 
            ))}
        </Div>
    )
}

export default ResultsList;