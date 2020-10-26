import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Styled from 'styled-components';

import MapModal from "./MapModal";
import axios from "axios";
require('dotenv').config();

const StyledMap = Styled.div`
  height: 100%;
  width: 75%;
  border-radius: 10px;
`

const ResultPin = ({brewery}) => <MapModal brewery={brewery} />;
 
const MapContainer = (props) => {
  console.log(props.searchResults)
  const [DefaultMapData, setDefaultMapData] = useState({
    lat: 41.559,
    lng: -90.483,
    zoom: 11
  })
  
  const calcCenter = (set, type) => {
    console.log(set)
    if(set.length > 0) {
      return set.reduce((a,b) => parseFloat(a) + parseFloat(b), 0) / set.length;
    } else {
      if(type === "lat") {
        return DefaultMapData.lat;
      } else if(type === "lng") {
        return DefaultMapData.lng;
      }
    }
  }

  let lats=[];
  let lngs=[];
  // Setting map center based on center of results, will only change on newSet of results
  useEffect(() => {
    {props.searchResults.map((brew) => {
      if(brew.latitude) {
        lats.push(brew.latitude);
        lngs.push(brew.longitude);
      } else {
        console.log("I got in")
        let geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?"
        let street = brew.street;
        street = street.split("Ste")[0];
        let address = `${street}, ${brew.city} ${brew.state}`;
        address = address.split(" ").join("%20")
        geocodeURL = `${geocodeURL}address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        console.log(geocodeURL)
  
        axios.get(geocodeURL)
          .then(resp => console.log(resp))
      }
    })}

    
    setMapData({
      center: {
        lat: calcCenter(lats, "lat"),
        lng: calcCenter(lngs, "lng")
      },
      zoom: 11
    })
    console.log([calcCenter(lats, "lat"), calcCenter(lngs, "lng")])

  }, [props.searchResults])
  

  
  
  const [mapData, setMapData] = useState({
    center: {
      lat: calcCenter(lats, "lat"),
      lng: calcCenter(lngs, "lng")
    },
    zoom: 11
  })
  return (
    
    
    <StyledMap>
      <GoogleMapReact 
        // todo look into other parameters to use
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={mapData.center}
        zoom={mapData.zoom}
      >
        {props.searchResults.map((brew, index) => {
           return (
            <ResultPin
              lat={parseFloat(brew.latitude)}
              lng={parseFloat(brew.longitude)}
              brewery={brew}
            />
            )
        })}
       
      </GoogleMapReact>
    </StyledMap>
  );
}
 
export default MapContainer;