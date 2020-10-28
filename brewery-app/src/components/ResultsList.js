import React from 'react';
import Result from './Result';
import  styled  from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice';
import { barCrawl, view, setView } from "../features/barCrawlSlice";
import EmailForm from './EmailForm';


const Div = styled.div` 
    // border: solid 5px #6f3c05;
    height: 90vh;
    width: 25%;
    background: #f2a743;
    position: relative;
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
    flex-direction: column;
    align-items: center;
    &.message {
        padding: 15px;
        text-align: center;
    }
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
                        <ResultHolder>
                       { barCrawlList.map((brew, index) => (
                            <Result
                                result={brew}
                                key={index}
                            />
                        ))}
                        </ResultHolder>

                    }
                    


                </ResultHolder>
            }
            <EmailForm />
        </Div>
    )
}

export default ResultsList;