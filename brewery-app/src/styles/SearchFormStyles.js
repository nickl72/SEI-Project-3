import Styled, {css, keyframes} from 'styled-components';
import { headShake } from 'react-animations';


const headShakeAnimation = keyframes`${headShake}`;


export const StyledForm = Styled.form`
    border: solid black 5px;
    width: 80%;
    margin: 0 auto;
    padding: 5px;
`

export const FormTitle = Styled.h2`
    text-align: center;
    margin: 0;
`

export const FormInputs = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

export const InputContainer = Styled.div`
    display: flex;
    flex-flow: column wrap;
`


export const StyledInput = Styled.input`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    margin: 3px;
    width: 30vw;
`

export const StyledSelect = Styled.select`
    margin: 5px;
    width: 30vw;
`

export const ErrorMessage = Styled.p`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    color: red;
    margin: 0;
`
