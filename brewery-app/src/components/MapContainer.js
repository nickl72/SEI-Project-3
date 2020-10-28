import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectBreweryList } from '../features/breweryListSlice';
import { barCrawl, view } from "../features/barCrawlSlice";

import MapModal from "./MapModal";
import Legend from "./Legend";
require('dotenv').config();

const StyledMap = Styled.div`
  height: 87vh;
  width: 75%;
  z-index: 0;

`

const ResultPin = ({brewery}) => <MapModal brewery={brewery} />;
const LegendMarker = ({items}) => <Legend items = {items} />;
 
const MapContainer = () => {
  const breweryList = useSelector(selectBreweryList)
  const barCrawlList = useSelector(barCrawl);
  const activeView = useSelector(view);

  console.log(breweryList)
  
  const calcCenter = (set, type) => {
    if(set.length > 0) {
      return set.reduce((a,b) => parseFloat(a) + parseFloat(b), 0) / set.length;
    } else {
      if(type === "lat") {
        return mapData.default.lat;
      } else if(type === "lng") {
        return mapData.default.lng;
      }
    }
  }

  const [legendData, setLegendData ] = useState({
    activeTypes:[]
  })

  const addUnique = (item, list) => {
    if(list.indexOf(item) === -1) {
      list.push(item)
    }
    return list
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

  
  // Setting map center based on center of results, will only change on newSet of results
  useEffect(() => {
    let newLegend =  legendData.activeTypes;
    
    breweryList.map((brew) => {
      if(brew.latitude) {
        mapData.activeLats.push(brew.latitude);
        mapData.activeLngs.push(brew.longitude);
        addUnique(brew.brewery_type, newLegend);
        
      } else {
        console.error("Your data parsed incorrectly");
      }
      
      return 0;
    })
    
    setLegendData({
      activeTypes: newLegend
    })
    
    setMapData({
      center: {
        lat: calcCenter(mapData.activeLats, "lat"),
        lng: calcCenter(mapData.activeLngs, "lng")
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
    // console.log([calcCenter(mapData.activeLats, "lat"), calcCenter(mapData.activeLngs, "lng")]) // todo remove before turning in

    // Keep here to suppress dependency warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breweryList])

  useEffect(() => {
    let newLegend = [];
    console.log("updating legend")
    console.log(activeView === "results")
    if(activeView === "results") {
      console.log("got in results")
      breweryList.map((brew) => {
        addUnique(brew.brewery_type, newLegend)
      })
    } else {
      barCrawlList.map((brew) => {addUnique(brew.brewery_type, newLegend)})
    }

    setLegendData({
      activeTypes: newLegend
    })



  }, [activeView])
  
  return (
    <StyledMap>
      <LegendMarker 
          items={legendData.activeTypes}
          />
      <GoogleMapReact 
        // todo look into other parameters to use
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={mapData.center}
        zoom={mapData.zoom}
      >
        {(activeView === "results") && breweryList.map((brew, index) => {
          return (
          <ResultPin
            lat={parseFloat(brew.latitude)}
            lng={parseFloat(brew.longitude)}
            brewery={brew}
            key={index}
          />
          )
        })}
        {(activeView === "barCrawl") && barCrawlList.map((brew, index) => {
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
