import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;


const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeInAnimation} 2s 1;
`

const KidsPage = () => {
    return (
        <Div>
            <img src='https://media1.tenor.com/images/16ccbfc83e392ca0c393084764533764/tenor.gif' />
        </Div>
    )
}

export default KidsPage;