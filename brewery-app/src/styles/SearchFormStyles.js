import Styled, {css, keyframes} from 'styled-components';
import { headShake, slideInDown, slideOutUp } from 'react-animations';


const headShakeAnimation = keyframes`${headShake}`;
const slideInDownAnimation = keyframes`${slideInDown}`;
const slideOutUpAnimation = keyframes`${slideOutUp}`;


export const StyledForm = Styled.form`
    margin: 0;
    background: #f2a743;
    // border: solid 5px #6f3c05;
    width: 100%;
    height: 20vh;
    min-width: 300px;
    min-height: 150px;
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: 1;
`

export const FormTitle = Styled.h3`
    text-align: center;
    margin: 0;
`

export const FormInputs = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    // z-index: auto;

`

export const InputContainer = Styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 45%;
    align-items: center;
`


export const StyledInput = Styled.input`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    margin: 5px;
    width: 10vw;
    min-width: 125px;
`

export const StyledSelect = Styled.select`
    margin: 5px;
    width: 10vw;
    min-width: 125px;
`

export const SubmitButton = Styled.input`
    width: 150px;
    margin: 10px;
`

export const ErrorMessage = Styled.p`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    color: red;
    margin: 0;
`
