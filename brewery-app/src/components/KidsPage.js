import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: #f9efc1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`
const KidsPage = () => {
    return (
        <Div>
            <img src='https://media1.tenor.com/images/16ccbfc83e392ca0c393084764533764/tenor.gif' />
        </Div>
    )
}

export default KidsPage;