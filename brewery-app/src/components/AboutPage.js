import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: xx-large;
    color: #331a04;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        width: 80%;
        font-weight: 500;
    }
`
const AboutPage = () => {
    return (
        <Div>
            <h1>About Puzzles</h1>
            <p>Puzzles is the Bar Crawl tool you've been Waiting for!</p>
            <p>Whether it's a town you know, or one you've never been to, 
                we can help you find the best bars, breweries, and brewpubs to explore. 
                For those of you that want to try them all, we've made it easy to pick out 
                and plan a bar crawl adventure for you and your friends. Once you've made the 
                plan we'll send you an email with your itinerary so no one gets lost in the 
                journey.</p>
        </Div>
    )
}

export default AboutPage