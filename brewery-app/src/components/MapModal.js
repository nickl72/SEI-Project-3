import React, {useState, setState} from "react";
import styled from "styled-components";
import {Bold, Holder, Icon, Modal} from "../styles/BreweryDisplayStyle";
import { useSelector } from "react-redux";
import { selectBrewery } from "../features/activeBrewerySlice";


function MapModal(props) {
    const [MapData, setMapData] = useState({
        brewery: props.brewery,
        show: false,
    })

    const toggleModal = (e) => {
        setMapData({
            brewery: props.brewery,
            show: !MapData.show
        })
    }
    const activeBrew = useSelector(selectBrewery);
    console.log(activeBrew)
    let IconURL;
    switch(MapData.brewery.brewery_type) {
        case "micro":
            IconURL = "./beer-mug_1f37a.png";
            break;
        case "regional":
            IconURL = "./triangular-flag-on-post_1f6a9.png";
            break;
        case "brewpub":
            IconURL = "./fork-and-knife-with-plate_1f37d.png";
            break;
        case "large":
            IconURL = "./factory_1f3ed.png";
            break;
        case "contract":
        case "proprietor":
            IconURL = "./clinking-beer-mugs.png";
            break;
        default:
            IconURL = "./beer-mug_1f37a.png";
            break;
    }

    console.log(MapData.brewery.id)
    console.log(activeBrew.id)
    console.log(MapData.brewery.id === activeBrew.id)
    return(
        <Holder>
            <Icon 
                src={IconURL} 
                onClick={toggleModal} 
                className={MapData.brewery.id === activeBrew.id ? "light" : null}
                />
            {MapData.show ? 
            <Modal>
                <Bold>{MapData.brewery.name}</Bold>
                <a href={MapData.brewery.website_url} target="_blank"> {MapData.brewery.website_url.replace("http://","")}</a>
            </Modal>
            : null }
            
        </Holder>
    )
}

export default MapModal;