import React from 'react';
import { useDispatch } from 'react-redux';
import { oldEnough, tooYoung } from '../features/verifyAgeSlice';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations';

const animation = keyframes`${fadeIn}`;

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    form div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form {
        flex-direction: column;
        justify-content: space-evenly;
        animation: ${animation} 2s 1;
    }
    .date { 
        margin: 1em;
        background: silver;
        padding: 0 0.3em; 
        color: #532b04;
        background: #e78c11; 
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        font-size: 2em;
        width: 4em;
        height: 2em;
        font-weight: 600;
        text-align: center;
    }
    .submit {
        font-size: 2em;
        height: 2em;
        font-weight: 600;
        width: 8em;
        background: #331a04;
        color: #fbdc81;
    }
    h3 {
        text-align: center;
        font-size: 3em;
        font-weight: 700;
        color: #331a04
    }
`

function VerifyAge() {
    const dispatch = useDispatch();

    const checkAge = (e) => {
        e.preventDefault();
        const [day, month, year] = [parseInt(e.target.day.value), parseInt(e.target.month.value), parseInt(e.target.year.value)]
        console.log(isNaN(day + month + year))
        console.log(month+ day)
        if (isNaN(day + month + year)) {
            return
        }

        // splits js date into YYYY-MM-DD... -> [YYYY, MM, DD...]
        const today = (new Date).toISOString().split('-');
        console.log(today)

        if (parseInt(today[0])-year > 21) { // year
            dispatch(oldEnough());
            console.log('oyear')

        } else if (parseInt(today[0])-year < 21) { // year
            dispatch(tooYoung());
            console.log('yyear')

        } else {
            if (parseInt(today[1]) > month) { // month
                dispatch(oldEnough());
                console.log('omonth')

            } else if (parseInt(today[1]) < month) { // month
                dispatch(tooYoung());
                console.log('ymonth')

            } else {
                if (parseInt(today[2]) >= day) { // day
                    dispatch(oldEnough());
                    console.log('oday')
                } else { // day
                    dispatch(tooYoung());
                    console.log('yday')
                }
            }
        }
    }

    return (
        <Div>
            <form onSubmit={(e) => checkAge(e)} autoComplete='off'>
                <h3>Enter your birthday to proceed to site</h3>
                <div>
                    <input className='date' type='text' placeholder='MM' name='month' maxLength='2'/>
                    <input className='date' type='text' placeholder='DD' name='day' maxLength='2'/>
                    <input className='date year' type='text' placeholder='YYYY' name='year' minLength='4' maxLength='4'/>
                </div>
                <div>
                    <input className='submit' type='submit' value='Verify Age'/>
                </div>
            </form>
        </Div>
    )
}

export default VerifyAge;