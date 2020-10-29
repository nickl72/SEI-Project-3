import Styled, {css, keyframes} from 'styled-components';
import { headShake, slideInDown, slideOutUp } from 'react-animations';
import { StyledInput as GenericStyledInput, StyledSubmit} from './FormStyles';


const headShakeAnimation = keyframes`${headShake}`;
const slideInDownAnimation = keyframes`${slideInDown}`;
const slideOutUpAnimation = keyframes`${slideOutUp}`;


export const StyledForm = Styled.form`
    margin: 0;
    background: #f2a743;
    width: 100%;
    min-width: 300px;
    min-height: 150px;
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: 1;
    box-shadow: 3px 3px 5px grey;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
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


export const StyledInput = Styled(GenericStyledInput)`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    margin: 5px;
    height: 1.5em;
    width: 10vw;
    min-width: 125px;
`

export const StyledSelect = Styled.select`
    padding: 0 0.3em; 
    color: #532b04;
    background: #e78c11;
    font-size: 1em;
    height: 1.5em;
    font-weight: 600;
    text-align: center;
    border-radius: 5px; 
    margin: 5px;
    width: 10vw;
    min-width: 125px;
`

export const SubmitButton = Styled(StyledSubmit)`
    width: 150px;
    margin: 10px;
`

export const ErrorMessage = Styled.p`
    animation: ${(props) => props.message ? css`${headShakeAnimation} 2s 1` : "none"};
    color: red;
    margin: 0;
`
