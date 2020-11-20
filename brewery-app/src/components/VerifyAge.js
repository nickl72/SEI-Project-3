import React from 'react';
import { useDispatch } from 'react-redux';
import { oldEnough, tooYoung } from '../features/verifyAgeSlice';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations';
import { StyledSubmit, StyledInput } from '../styles/FormStyles';

import * as S from '../styles/HeaderStyles';


const BigStyledSubmit = styled(StyledSubmit)`
    font-size: 2em;

`

const BigStyledInput = styled(StyledInput)`
    font-size: 2em;
    width: 4em;
    height: 2em;
`

const animation = keyframes`${fadeIn}`;

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
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
    h3 {
        text-align: center;
        font-size: 2em;
        font-weight: 700;
        color: #331a04;
    }
`

function VerifyAge() {
    const dispatch = useDispatch();

    const checkAge = (e) => {
        e.preventDefault();
        const [day, month, year] = [parseInt(e.target.day.value), parseInt(e.target.month.value), parseInt(e.target.year.value)]
        if (isNaN(day + month + year)) {
            return
        }

        // splits js date into YYYY-MM-DD... -> [YYYY, MM, DD...]
        const today = (new Date()).toISOString().split('-');

        if (parseInt(today[0])-year > 21) { // year
            dispatch(oldEnough());
        } else if (parseInt(today[0])-year < 21) { // year
            dispatch(tooYoung());
        } else {
            if (parseInt(today[1]) > month) { // month
                dispatch(oldEnough());
            } else if (parseInt(today[1]) < month) { // month
                dispatch(tooYoung());
            } else {
                if (parseInt(today[2]) >= day) { // day
                    dispatch(oldEnough());
                } else { // day
                    dispatch(tooYoung());
                }
            }
        }
    }

    return (
        <Div>
            <S.TitleDiv>
                <S.PageIcon src="/brew_puzzle.png" alt="Puzzles Icon" />
                    <S.PageTitle>
                        <h1>Puzzles</h1>
                        <p>Put Your Night Together</p>
                    </S.PageTitle>
            </S.TitleDiv>


            <form onSubmit={(e) => checkAge(e)} autoComplete='off'>
                <h3>Enter your birthday to proceed to site</h3>
                <div>
                    <BigStyledInput className='date' type='text' placeholder='MM' name='month' maxLength='2' />
                    <BigStyledInput className='date' type='text' placeholder='DD' name='day' maxLength='2'/>
                    <BigStyledInput className='date year' type='text' placeholder='YYYY' name='year' minLength='4' maxLength='4'/>
                </div>
                <div>
                    <BigStyledSubmit className='submit' type='submit' value='Verify Age'/>
                </div>
            </form>
        </Div>
    )
}

export default VerifyAge;