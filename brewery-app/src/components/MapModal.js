import React, {useState, setState} from "react";
import {Bold, } from "../styles/BreweryDisplaySyle";

function MapModal(props) {
    const [MapData, setMapData] = useState({
        brewery: props.brewery,
        lat: props.lat,
        long: props.long,
        show: false
    })

    return(
        <div>
            <Bold>{brewery.name}</Bold>
            
            <a href={showpageData.brewery.website_url} target="_blank"> {showpageData.brewery.website_url.replace("http://","")}</a>
        </div>
    )
}