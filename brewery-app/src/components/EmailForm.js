import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { barCrawl } from '../features/barCrawlSlice';
import sendEmail from '../app/email';


const EmailForm = () => {
    const barCrawlList = useSelector(barCrawl);
    const [error, setError] = useState(false);

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    const sendList = (e) => {
        e.preventDefault();
        if (!e.target.email.value || !e.target.name.value) {
            setError(true);
            return
        }
        // opens and styles div to hold response
        let htmlMessage = `
            <div style="
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
                display: flex; 
                flex-direction: column; 
                align-items: center;"
            >
        `
        // loops through bar crawl list to make card for email for each bar
        barCrawlList.forEach(bar => {
            htmlMessage = htmlMessage + `
                <div style='
                    background: #f9efc1; 
                    padding: 1em; 
                    margin: 1em;
                    border-radius: 2em; 
                    color: #331a04;
                    width: 15em;'
                >
                    <h2>
                        <a 
                            href=${bar.website_url} 
                            target='_blank' 
                            style='color: #331a04;'
                        >${bar.name}</a>
                    </h2>
                    <address>
                        <a 
                            href='https://www.google.com/maps/place/${bar.street},${bar.city},${bar.state}' 
                            target='_blank'
                            style='
                                color: #331a04;
                                text-decoration: none;
                            '
                        >
                            ${bar.street}<br/>
                            ${bar.city}, ${bar.state}
                        </a> 
                    </address>
                    <p>Call: <a href='tel:${bar.phone}' >${formatPhoneNumber(bar.phone)}</a></p>
                </div>
            `
        })
        // closes div for entire response
        htmlMessage = htmlMessage + `</div>`
        sendEmail(e.target.name.value, htmlMessage, e.target.email.value)
    }
    
    return (
        <form onSubmit={sendList}>
            {error && <p>Please fill in all Fields</p>}
            <input type='email' name='email'  placeholder='email'/>
            <input type='text' name='name' placeholder='name'/>
            <input type='submit' value='Send List' />
        </form>
    )
}

export default EmailForm;