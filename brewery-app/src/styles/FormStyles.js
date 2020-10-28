import styled from 'styled-components';

export const StyledEmailForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledSubmit = styled.input`
    font-size: 1em;
    height: 2em;
    font-weight: 600;
    width: 8em;
    background: #331a04;
    color: #fbdc81;
    cursor: pointer;
    &:hover {
        background: #532b04;
    }
`

export const StyledInput = styled.input`
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
        width: 10em;
        height: 2em;
        font-weight: 600;
        text-align: center;
        border-radius: 5px; 
`