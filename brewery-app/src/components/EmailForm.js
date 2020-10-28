import React from 'react';
import { useSelector } from 'react-redux';
import { barCrawl } from '../features/barCrawlSlice';
import sendEmail from '../app/email';

// {address_2: null
// address_3: null
// brewery_type: "micro"
// city: "West Des Moines"
// country: "United States"
// county_province: null
// created_at: "2018-07-24T01:33:24.495Z"
// id: 2817
// latitude: "41.5936597"
// longitude: "-93.7489517002412"
// name: "Twisted Vine Brewery"
// phone: "5157202940"
// postal_code: "50266-1111"
// state: "Iowa"
// street: "3320 Westown Pkwy"
// updated_at: "2018-08-24T00:38:17.525Z"
// website_url: "http://www.twistedvinebrewery.com"
// __proto__: Object
// length: 1
// __proto__: Array(0)}


const EmailForm = () => {
    const barCrawlList = useSelector(barCrawl);

    const sendList = (e) => {
        e.preventDefault();
        console.log('list');
        let htmlMessage = `<div>`
        barCrawlList.forEach(bar => {
            htmlMessage = htmlMessage + `
                <br/>
                <br/>
                <h2><a href=${bar.website_url} >${bar.name}</a></h2>
                <p>${bar.street}<br/>
                   ${bar.city}, ${bar.state} 
                </p>
                <br/>
                <p>${bar.phone}</p>
                `
        })
        htmlMessage = htmlMessage + `</div>`
        sendEmail(e.target.name.value, htmlMessage, e.target.email.value)
    }
    
    return (
        <form onSubmit={sendList}>
            <input type='email' name='email'  placeholder='email'/>
            <input type='text' name='name' placeholder='name'/>
            <input type='submit' value='Send List' />
        </form>
    )
}

export default EmailForm;