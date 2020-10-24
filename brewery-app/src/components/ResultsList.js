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
    const fakeResults = ['result1', 'result2'];

    return (
        <Div className='Result-list'>
            {fakeResults.map((result, key) => <Result result={result} key={key}/> )}
            {props.results && props.results.map((result, key) => <Result result={result} key={key}/> )}
        </Div>
    )
}

export default ResultsList;