import React from 'react';
import styled from 'styled-components';
import { activateBrewery, deactivateBrewery, selectBrewery } from '../features/brewerySlice';
import { useSelector, useDispatch } from 'react-redux';



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
    const dispatch = useDispatch();
    const brewery = useSelector(selectBrewery);

    const isActiveBrewery = (props.result.id === brewery.id);

     // Sends brewery details up to hompage level and highlights the active div based on the index
     // Sets redux state for active brewery
     const handleClick = (e) => {
        if (isActiveBrewery) {
            dispatch(deactivateBrewery());
        } else {
            dispatch(activateBrewery(props.result));
        }
    }

    return (
        <Div className='result' onClick={(e) => handleClick(e)}>
            <div className={isActiveBrewery ? 'active' : ''}> 
                <h3>Brewery: {props.result.name}</h3>
                <h4>Location: {props.result.street}, {props.result.city}, {props.result.state}</h4>
            </div>
        </Div>
    )
}

export default Result;