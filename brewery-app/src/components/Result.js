import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
    padding: 0;
    box-shadow: 2px 2px 10px 2px grey;
    &:hover {
        box-shadow: none;
    }
    &:active {
        box-shadow: inset 2px 2px 10px 2px grey;
    }
    .clicked {
        background: red;
    }
    div > *{
        margin: 0;
    }
`

const Result = (props) => {

    const [resultData, setResultData] = useState({
        clicked: false
    })

    const handleClick = (e) => {
        setResultData({
            clicked: !resultData.clicked
        })
    }

    console.log(props)
    return (
        <Div className='result' onClick={(e) => handleClick(e)}>
            <div className={resultData.clicked ? 'clicked' : ''}>
                <h3>Brewery: {props.result.name}</h3>
                <h4>Location: {props.result.street}, {props.result.city}, {props.result.state}</h4>
            </div>
        </Div>
    )
}

export default Result;