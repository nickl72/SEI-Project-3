import styled, { keyframes } from "styled-components";
import {rotateOutUpRight, rotateInDownRight, bounceIn, merge} from "react-animations";

const bounceInAnimation = keyframes`${bounceIn}`;
const drinkOut =  keyframes`${rotateOutUpRight}`;
const drinkIn = keyframes`${rotateInDownRight}`;
const merger = merge(bounceIn, rotateOutUpRight);

export const ShowPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`

export const BreweryName = styled.div`
    
`
export const BrewImage = styled.img`

`

export const BrewStats = styled.div`

`

export const BrewDiv = styled.div`

`

export const Bold = styled.span`
    font-weight: bold;
`

export const Holder = styled.div`
    display: flex;
    width: 25px;
    &.row{
        width: 100%;
        justify-content: space-between;
    }
`
export const BasicIcon = styled.img`
    height: 22px;
    width: 22px;
    margin: 5px;
`

export const Icon = styled(BasicIcon)`
    margin: 0;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    background: radial-gradient(darkgray 15%, transparent);
    animation: 2s ${bounceInAnimation};
    &.light {
        animation: 1s ${drinkIn};
        box-shadow: 0px 0px .5vmin .5vmin navy;
        background: navy;
        
    }
`
export const CloseIcon = styled(Holder) `
    height: 22px;
    width: 22px;
    cursor: pointer;
`

export const Modal = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    transform: translate(2.5em, 0);
    background: white;
    border: solid black 2px;
    border-radius: 3px;
    padding: 5px;
    width: 150px;
    z-index: 1;
`

export const LegendHolder = styled.div`
    background: white;
    margin: 10px;
    padding: 8px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    min-width: 100px;
    z-index: 2;
    min-height: 12px;
    position: absolute;
    color: rgba(0, 0, 0, .87);

    .legendRow {
        display: flex;
        align-items: center;
    }
    
`
export const Title = styled.div`
    font-weight: bold;
    text-decoration: underline;
    text-align: center;
`