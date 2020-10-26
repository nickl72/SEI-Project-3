import React, {useState, setState} from "react";
import styled from "styled-components";
import {Bold, } from "../styles/BreweryDisplayStyle";

const Holder = styled.div`
    display: flex;
`
const Icon = styled.img`
    height: 1.5em;
    width: 1.5em;
    position: relative;
`

const Modal = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    transform: translate(2.5em, 0);
    background: white;
    border: solid black 2px;
    border-radius: 3px;
`


function MapModal(props) {
    const [MapData, setMapData] = useState({
        brewery: props.brewery,
        show: false
    })

    let IconURL;
    switch(MapData.brewery.brewery_type) {
        case "micro":
            IconURL = "./beer-mug-emoji.png";
            break;
        default:
            IconURL = "./beer-mug-emoji.png";
            break;
    }

    return(
        <Holder>
            <Icon src={IconURL}/>
            <Modal>
                <Bold>{MapData.brewery.name}</Bold>
                <a href={MapData.brewery.website_url} target="_blank"> {MapData.brewery.website_url.replace("http://","")}</a>
            </Modal>
            
        </Holder>
    )
}

export default MapModal;