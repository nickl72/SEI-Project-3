import React from 'react';
import styled from 'styled-components';
import { activateBrewery, deactivateBrewery, selectBrewery } from '../features/activeBrewerySlice';
import { addBrewery, barCrawl } from "../features/barCrawlSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



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
    const barCrawlList = useSelector(barCrawl);

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
    console.log(barCrawlList);
    
    const isOnList = (brewid, list) => {
        let index = list.findIndex(x => x.id === brewid);
        let onList = (index === -1 ? false : true);
        return onList;
    }

    let onList = isOnList(props.result.id, barCrawlList);

    const addClick = (e) => {
        console.log(e.target)
        let onList = isOnList(props.result.id, barCrawlList);
        if(!onList) {
            dispatch(addBrewery(props.result));
        }
        
        
    }

    return (
        <Div className='result' onClick={(e) => handleClick(e)}>
            <div className={isActiveBrewery ? 'active' : ''}> 
                <h3>Brewery: {props.result.name}</h3>
                <h4>Location: {props.result.street}, {props.result.city}, {props.result.state}</h4>
                <Link to={`/show/${props.result.name.split(' ').join('')}`}>More info</Link> { /* brewery name in URL is for visual purposes only. showPage uses Redux state */ }
                <button onClick={(e) => addClick(e)}>
                    {onList ? "Remove from Bar Crawl" : "Add to Bar Crawl"}
                </button>
            </div>
        </Div>
    )
}

export default Result;