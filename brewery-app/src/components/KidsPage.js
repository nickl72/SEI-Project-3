import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;


const Div = styled.div`
    height: 80vh;
    width: 100vw;
    display: flex;
    color: #0d0404;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeInAnimation} 2s 1;
`

const KidsPage = () => {
    return (
        <Div>
            <h1>Sorry, Bud, the bouncer caught you.</h1> <h1> You have to be 21 to enter!</h1>
            <img src='https://media1.tenor.com/images/16ccbfc83e392ca0c393084764533764/tenor.gif' alt='Kid spills drink gif'/>
        </Div>
    )
}

export default KidsPage;