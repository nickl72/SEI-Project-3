import React from 'react';
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
    .active {
        background: red;
    }
    div > *{
        margin: 0;
    }
`

const Result = (props) => {

     // Sends brewery details up to hompage level and highlights the active div based on the index
     const handleClick = (e) => {
        if (props.active) {
            props.setActiveBrewery({
                location: null,
                index: null
            })
        } else {
            props.setActiveBrewery({
                location: {latitude: props.result.latitude, longitude: props.result.longitude},
                index: props.index
            })
        }
    }

    return (
        <Div className='result' onClick={(e) => handleClick(e)}>
            <div className={props.active ? 'active' : ''}> 
                <h3>Brewery: {props.result.name}</h3>
                <h4>Location: {props.result.street}, {props.result.city}, {props.result.state}</h4>
            </div>
        </Div>
    )
}

export default Result;