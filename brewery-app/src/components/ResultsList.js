import React from 'react';
import Result from './Result';
import { useSelector, useDispatch } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice';
import { barCrawl, view, setView } from "../features/barCrawlSlice";
import { ResultHead, ViewButton, ResultHolder, ResultList } from '../styles/ResultStyle';


const ResultsList = () => {
    const viewClick = (view) => {
        dispatch(setView(view))
    }
    const dispatch = useDispatch();
    const searchResults = useSelector(selectBreweryList);
    const barCrawlList = useSelector(barCrawl);
    const activeView = useSelector(view);

    return (
        <ResultList className='Result-list'>
            <ResultHead>
                <ViewButton 
                    onClick={() => viewClick("results")}
                    className={activeView==="results" ? "active" : "inactive"}
                >Search Results</ViewButton>
                <ViewButton 
                    onClick={() => viewClick("barCrawl")}
                    className={activeView==="barCrawl" ? "active" : "inactive"}
                >Bar Crawl List</ViewButton>
            </ResultHead>
            {activeView === "results" ?
                <ResultHolder>
                    <h3>Search Results</h3>
                    {searchResults && searchResults.map((result, index) => (
                    <Result 
                        result={result} 
                        key={index} 
                    /> 
                    ))}
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
                            <Result
                                result={brew}
                                key={index}
                            />
                        ))
                    }
                </ResultHolder>
            }
        </ResultList>
    )
}

export default ResultsList;