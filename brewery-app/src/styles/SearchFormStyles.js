import Styled, {css, keyframes} from 'styled-components';
import { headShake, slideInDown } from 'react-animations';


const headShakeAnimation = keyframes`${headShake}`;
const slideInDownAnimation = keyframes`${slideInDown}`;


export const StyledForm = Styled.form`
    margin: 0 auto;
    padding: 5px;
    background: #f2a743;
    border: solid 5px #6f3c05;
    width: 30%;
    height: 20vh;
    min-width: 300px;
    min-height: 150px;
    position: absolute;
    z-index: 1;
    // transform: translate(0, 10vh);
    animation: ${slideInDownAnimation} 1s 1;

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
    width: 45%;
    align-items: center;
`


export const StyledInput = Styled.input`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    margin: 3px;
    width: 10vw;
`

export const StyledSelect = Styled.select`
    margin: 5px;
    width: 10vw;
`

export const ErrorMessage = Styled.p`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    color: red;
    margin: 0;
`
