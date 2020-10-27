import styled from "styled-components";

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
export const Icon = styled.img`
    height: 22px;
    width: 22px;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    background: radial-gradient(darkgray 15%, transparent);
    &.light {
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