import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>About Puzzles</h1>
            <p>Puzzles is your one stop shop to find breweries in your area, or anywhere you plan to travel.</p>
            <ul>
                <li><img/> MicroBrewery</li>
                <li><img/> Regional Brewery</li>
                <li><img/> Brewpub</li>
                <li><img/> Large</li>
                <li><img/> Bar</li>
                <li><img/> Contract</li>
                <li><img/> Proprieter</li>

            </ul>
            <Link to='/'>Return to Search Page</Link>
        </div>
    )
}

export default AboutPage