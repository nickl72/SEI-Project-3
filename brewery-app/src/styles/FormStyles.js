import styled from 'styled-components';

export const StyledEmailForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 600;
    background: #f5c270;
    border-radius: 2em;
    padding: 1em;
    p {
        height: 1em;
    }
`
export const StyledSubmit = styled.input`
    font-size: 1em;
    height: 2em;
    font-weight: 600;
    width: 8em;
    background: #331a04;
    color: #fbdc81;
    cursor: pointer;
    text-align: center;
    &:hover {
        background: #532b04;
    }
`

export const StyledInput = styled.input`
        margin: 1em;
        padding: 0 0.3em; 
        color: #532b04;
        background: #e78c11; 
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        font-size: 1em;
        width: 15em;
        height: 2em;
        font-weight: 600;
        text-align: center;
        border-radius: 5px; 
`
export const ModalDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10000;
    top: 0;
    background: rgba(0,0,0,.4);
`
