import React from 'react';
import { activateBrewery, deactivateBrewery, selectBrewery } from '../features/activeBrewerySlice';
import { hideSearch } from '../features/showSearchFormSlice';
import { addBrewery, barCrawl, removeBrewery } from "../features/barCrawlSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ResultDiv } from '../styles/ResultStyle';


const Result = (props) => {
    const dispatch = useDispatch();
    const brewery = useSelector(selectBrewery);
    const barCrawlList = useSelector(barCrawl);

    const isActiveBrewery = (props.result.id === brewery.id);
     // Sends brewery details up to hompage level and highlights the active div based on the index
     // Sets redux state for active brewery
     const handleClick = (e) => {
        if (e.target.className === 'cancel') {
            dispatch(activateBrewery(props.result));
            return
        }
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

    const updateListClick = (e) => {
        let onList = isOnList(props.result.id, barCrawlList);
        if(onList) {
            dispatch(removeBrewery(props.result));
        } else {
            dispatch(addBrewery(props.result));
        }
        
        
    }

    const hideForm = () => {
        dispatch(hideSearch());
    }

    return (
        <ResultDiv className={isActiveBrewery ? 'result active' : 'result'} onClick={(e) => handleClick(e)}>
            <div className={isActiveBrewery ? 'active' : ''}> 
                <h3>Brewery: {props.result.name}</h3>
                <h4>Location: {props.result.street}, {props.result.city}, {props.result.state}</h4>
                { /* brewery name in URL is for visual purposes only. showPage uses Redux state */ }
                <Link to={`/show/${props.result.name.split(' ').join('')}`} className='cancel' onClick={hideForm}>
                    More info
                </Link> 
                <button className='cancel' onClick={(e) => updateListClick(e)}>
                    {onList ? "Remove from Bar Crawl" : "Add to Bar Crawl"}
                </button>
            </div>
        </ResultDiv>
    )
}

export default Result;