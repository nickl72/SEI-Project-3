import React from "react";
import {LegendHolder, BasicIcon, Bold, Title} from "../styles/BreweryDisplayStyle";


const Legend = (props) => {
    console.log("I got to the legend")
    let items=props.items;    
    
    const iconURL = (item) => {
        switch(item) {
            case "micro":
                return "./beer-mug_1f37a.png";
            case "regional":
                return "./triangular-flag-on-post_1f6a9.png";
            case "brewpub":
                return "./fork-and-knife-with-plate_1f37d.png";
            case "large":
                return "./factory_1f3ed.png";
            case "contract":
            case "proprietor":
                return  "./clinking-beer-mugs.png";
            default:
                return "./beer-mug_1f37a.png";
        }
    }
    

    return(
        <LegendHolder>
            <Title>Legend</Title>
            {items.map((item, index) => {
                return (
                <div className = "legendRow" key = {index}>
                    <BasicIcon src = {iconURL(item)} alt={item} />
                    <p>{item}</p>
                </div>)
            })}
        </LegendHolder>
    )
}

export default Legend;