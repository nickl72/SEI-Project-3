import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 2px 2px 10px 2px grey;
    &:hover {
        box-shadow: none;
    }
    &:active {
        box-shadow: inset 2px 2px 10px 2px grey;
    }
`

const Result = (props) => {
    return (
        <Div className='result'>
            <h3>{props.result}</h3>
        </Div>
    )
}

export default Result;