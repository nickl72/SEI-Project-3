import React from 'react';
import Result from './Result';
import  styled  from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice';
import { barCrawl, view, setView } from "../features/barCrawlSlice";


const Div = styled.div` 
    // border: solid 5px #6f3c05;
    height: 87vh;
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
const ResultHolder = styled.div `
    display: flex;
    height: calc(87vh - 30px);
    flex-direction: column;
    align-items: center;
    overflow: auto;
    &.message {
        padding: 15px;
        text-align: center;
    }
    h3 {
        margin: 10px;
    }
`
const CrawlCount = styled.span`
    display: inline-block;
    background-color: white;
    color: black;
    text-align: center;
    padding: 2px;
    border-radius: 20%;
    margin-left: 0.5em;
    font-weight: bold;
`

const ResultsList = () => {
    const viewClick = (view) => {
        dispatch(setView(view))
    }
    const dispatch = useDispatch();
    const searchResults = useSelector(selectBreweryList);
    const barCrawlList = useSelector(barCrawl);
    const activeView = useSelector(view);

    return (
        <Div className='Result-list'>
            <ResultHead>
                <ViewButton 
                    onClick={() => viewClick("results")}
                    className={activeView==="results" ? "active" : "inactive"}
                >Search Results</ViewButton>
                <ViewButton 
                    onClick={() => viewClick("barCrawl")}
                    className={activeView==="barCrawl" ? "active" : "inactive"}
                >
                    Bar Crawl List
                    <CrawlCount>{barCrawlList.length}</CrawlCount>
                    </ViewButton>
            </ResultHead>
            {activeView === "results" ?
                <ResultHolder>
                    <h3>Search Results</h3>
                    <ResultHolder className="results">
                        {searchResults && searchResults.map((result, index) => (
                        <Result 
                            result={result} 
                            key={index} 
                        /> 
                        ))}
                    </ResultHolder>
                </ResultHolder> 
                
            :
                <ResultHolder>
                    <h3>Bar Crawl List</h3>
                    {barCrawlList.length === 0 ? 
                        <ResultHolder className="message">
                            <h4>You haven't pick any breweries yet...</h4>
                            <h5>Time to get planning!</h5> 
                        </ResultHolder>
                        :
                        barCrawlList.map((brew, index) => (
                            <ResultHolder className="results">
                                <Result
                                    result={brew}
                                    key={index}
                                />
                            </ResultHolder>
                            ))                            
                    }
                </ResultHolder>
            }
        </Div>
    )
}

export default ResultsList;