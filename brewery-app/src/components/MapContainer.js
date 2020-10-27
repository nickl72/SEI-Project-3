import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice'

import MapModal from "./MapModal";
import axios from "axios";

require('dotenv').config();

const StyledMap = Styled.div`
  height: 100%;
  width: 75%;
  border-radius: 10px;

`

const ResultPin = ({brewery}) => <MapModal brewery={brewery} />;
 
const MapContainer = () => {
  const breweryList = useSelector(selectBreweryList)
  console.log(breweryList)
  
  const calcCenter = (set, type) => {
    if(set.length === 1 && set[0]!== " "){
      return set[0]
    }
    // todo: check with town of one
    if(set.length > 1) {
      if(set[1]==="" || set[1]===" ") {
        set.shift();
      }
      return set.reduce((a,b) => parseFloat(a) + parseFloat(b), 0) / set.length;
    } else {
      if(type === "lat") {
        return mapData.default.lat;
      } else if(type === "lng") {
        return mapData.default.lng;
      }
    }
  }

  const [mapData, setMapData] = useState({
    center: {
      lat: 41.559,
      lng: -90.483,
    },
    zoom: 11,
    default: {
      lat: 41.559,
      lng: -90.483,
      zoom: 11
    },
    activeLats: [],
    activeLngs: []
  })


   async function getCoords(geocodeURL) {
    await axios.get(geocodeURL)
      .then(resp => console.log(resp))
  }
  // Setting map center based on center of results, will only change on newSet of results
  useEffect(() => {
    {breweryList.map((brew) => {
      if(brew.latitude) {
        mapData.activeLats.push(brew.latitude);
        mapData.activeLngs.push(brew.longitude);
      } else {
        let geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?"
        let street = brew.street;
        street = street.split("Ste")[0];
        let address = `${street}, ${brew.city}, ${brew.state}`;
        address = address.split(" ").join("+")
        geocodeURL = `${geocodeURL}address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        
        
        
        getCoords(geocodeURL)
      }
    })}

    
    setMapData({
      center: {
        lat: calcCenter(mapData.activeLats, "lat"),
        lng: calcCenter(mapData.activeLngs, "lng")
      },
      zoom: 11,
      default: { /*set Map center to users local default center*/
        lat: 41.559,
        lng: -90.483,
        zoom: 11
      },
      activeLats: [],
      activeLngs: []
    })
    console.log([calcCenter(mapData.activeLats, "lat"), calcCenter(mapData.activeLngs, "lng")])

  }, [breweryList])
  

  
  

  return (
    
    
    <StyledMap>
      <GoogleMapReact 
        // todo look into other parameters to use
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={mapData.center}
        zoom={mapData.zoom}
      >
        {breweryList.map((brew, index) => {
           return (
            <ResultPin
              lat={parseFloat(brew.latitude)}
              lng={parseFloat(brew.longitude)}
              brewery={brew}
              key={index}
            />
            )
        })}
       
      </GoogleMapReact>
    </StyledMap>
  );
}
 
export default MapContainer;