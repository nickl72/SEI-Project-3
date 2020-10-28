import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { barCrawl, toggleEmail } from '../features/barCrawlSlice';
import sendEmail from '../app/email';
import { StyledEmailForm, StyledSubmit, StyledInput, ModalDiv, CloseDiv } from '../styles/FormStyles'


const EmailForm = () => {
    const barCrawlList = useSelector(barCrawl);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    function formatPhoneNumber(phoneNumber) {
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`
        }
    }

    const closeModal = (e) => {
        e.preventDefault();
        if (e.target===e.currentTarget) {
            dispatch(toggleEmail());
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
        sendEmail(e.target.name.value, htmlMessage, e.target.email.value);
        dispatch(toggleEmail());
    }
    
    return (
        <ModalDiv className='shadow'>
            <CloseDiv onClick={(e) => closeModal(e)}></CloseDiv>
            <StyledEmailForm className='email-form' onSubmit={sendList}>
                <h3>Send List In Email</h3>
                <StyledInput type='text' name='name' placeholder='Name'/>
                <StyledInput type='email' name='email'  placeholder='Email'/>
                <StyledSubmit type='submit' value='Email List' />
                {error ? <p>Please fill in all Fields</p>:<p></p>}
            </StyledEmailForm>
        </ModalDiv>
    )
}

export default EmailForm;