import React from 'react';
import Result from './Result';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice';
import { barCrawl, view, setView, selectEmail, toggleEmail } from "../features/barCrawlSlice";
import EmailForm from './EmailForm';
import { StyledSubmit } from '../styles/FormStyles';
import { Message, ResultList, ResultHead, ViewButton, ResultHolder, CrawlCount } from '../styles/ResultStyle';


const ResultsList = () => {
    const viewClick = (view) => {
        dispatch(setView(view))
    }
    const dispatch = useDispatch();
    const searchResults = useSelector(selectBreweryList);
    const barCrawlList = useSelector(barCrawl);
    const activeView = useSelector(view);
    const email = useSelector(selectEmail);

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
                        <Message className="message">
                            <h4>You haven't pick any breweries yet...</h4>
                            <h5>Time to get planning!</h5> 
                        </Message>
                        :
                        <ResultHolder>
                            <StyledSubmit value='Send Email' onClick={(e) => {
                                e.preventDefault()
                                dispatch(toggleEmail())}
                                } />
                            {barCrawlList.map((brew, index) => (
                                <ResultHolder className="results">
                                    <Result
                                        result={brew}
                                        key={index}
                                    />
                                </ResultHolder>
                            ))}                            
                        </ResultHolder>

                    }
                </ResultHolder>
            }

            {email && <EmailForm />}

        </ResultList>

    )
}

export default ResultsList;