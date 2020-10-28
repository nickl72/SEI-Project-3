import React, { useState } from 'react';
import Result from './Result';
import  styled  from 'styled-components';
import { useSelector } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice';
import { barCrawl } from "../features/barCrawlSlice";


const Div = styled.div` 
    // border: solid 5px #6f3c05;
    height: 90vh;
    width: 25%;
    background: #f2a743;
`
const ResultHead = styled.div`
    height: 25px;
    width: 100%;
    display: flex;
`
const ViewButton = styled.div `
    display: flex;
    margin: 0;
    background: #fbdc81;
    border-left: 2px solid #fbdc81;
    border-right: 2px solid #fbdc81;
    height: 100%;
    width: 50%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #f2a743;
        border-left: 2px solid #fbdc81;
        border-right: 2px solid #fbdc81;

    }
    &.active {
        background: #f2a743;
        border-left: 2px solid #f2a743;
        border-right: 2px solid #f2a743;
    }
`


const ResultsList = () => {
    const [viewState, setViewState] = useState({
        view: "results"
    })

    const viewClick = (view) => {
        setViewState({
            view
        })
    }

    const searchResults = useSelector(selectBreweryList);
    const barCrawlList = useSelector(barCrawl);
    return (
        <Div className='Result-list'>
            <ResultHead>
                <ViewButton 
                    onClick={() => viewClick("results")}
                    className={viewState.view==="results" ? "active" : "inactive"}
                >Search Results</ViewButton>
                <ViewButton 
                    onClick={() => viewClick("barCrawl")}
                    className={viewState.view==="barCrawl" ? "active" : "inactive"}
                >Bar Crawl List</ViewButton>
            </ResultHead>
            {viewState.view === "results" ?
                <div>
                    <h3>Search Results</h3>
                    {searchResults && searchResults.map((result, index) => (
                    <Result 
                        result={result} 
                        key={index} 
                    /> 
                    ))}
                </div> 
                
            :
                <div>
                    <h3>Bar Crawl List</h3>
                    {barCrawlList.length === 0 ? 
                        <div>
                            <h4>You haven't pick any breweries yet...</h4>
                            <h5>Time to get planning!</h5> 
                        </div>
                        :
                        barCrawlList.map((brew, index) => (
                            <Result
                                result={brew}
                                key={index}
                            />
                        ))
                    }
                </div>
            }
        </Div>
    )
}

export default ResultsList;