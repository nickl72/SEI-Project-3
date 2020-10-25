import React from 'react';
import Result from './Result';
import  styled  from 'styled-components';


const Div = styled.div` 
    border: 5px solid black;
    min-height: 80vh;
    min-width: 30vw;
    margin: 10px;
`

const ResultsList = (props) => {
    return (
        <Div className='Result-list'>
            <h3>Search Results</h3>
            {props.searchResults.map((result, key) => <Result result={result} key={key}/> )}
            {props.results && props.results.map((result, key) => <Result result={result} key={key}/> )}
        </Div>
    )
}

export default ResultsList;