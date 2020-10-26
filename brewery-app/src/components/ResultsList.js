import React from 'react';
import Result from './Result';
import  styled  from 'styled-components';


const Div = styled.div` 
    border: solid 5px #6f3c05;
    height: 100%;
    width: 25%;
    background: #f2a743;
`

const ResultsList = (props) => {
    console.log(props.searchResults)
    return (
        <Div className='Result-list'>
            <h3>Search Results</h3>
            {props.searchResults.map((result, index) => (
                <Result 
                    result={result} 
                    key={index} 
                    active={props.activeBrewery.index===index ? true: false}
                    setActiveBrewery={props.setActiveBrewery} // passed function from Homepage
                    index={index} // used when setActiveBrewery is called
                /> 
            ))}
            {/* {props.results && props.results.map((result, key) => <Result result={result} key={key}/> )} */}
        </Div>
    )
}

export default ResultsList;