import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>About Puzzles</h1>
            <p>Puzzles is your one stop shop to find breweries in your area, or anywhere you plan to travel.</p>
            <ul>
                <li> MicroBrewery</li>
                <li> Regional Brewery</li>
                <li> Brewpub</li>
                <li> Large</li>
                <li> Bar</li>
                <li> Contract</li>
                <li> Proprieter</li>
            </ul>
            <Link to='/'>Return to Search Page</Link>
        </div>
    )
}

export default AboutPage