import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Styled from 'styled-components';

import MapModal from "./MapModal";
require('dotenv').config();

const StyledMap = Styled.div`
  height: 70vh;
  width: 50%;
  border: solid brown 20px;
  border-radius: 10px;
`

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ResultPin = ({brewery}) => <MapModal brewery={brewery} />;
 
const MapContainer = (props) => {
  const [mapData, setMapData] = useState({
    center: {
      lat: 37.7,
      lng: -122.3
    },
    zoom: 11,
    BrewList: /*props.BrewList*/ [{
      id: 299,
      name: "Almanac Beer Company",
      brewery_type: "micro",
      street: "651B W Tower Ave",
      city: "Alameda",
      state: "California",
      postal_code: "94501-5047",
      country: "United States",
      longitude: "-122.306283180899",
      latitude: "37.7834497667258",
      phone: "4159326531",
      website_url: "http://almanacbeer.com",
      updated_at: "2018-08-23T23:24:11.758Z"
  }]
  })

  console.log(parseFloat(mapData.BrewList[0].longitude))
  return (

    
    <StyledMap>
      <GoogleMapReact 
        // todo look into other parameters to use
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={mapData.center}
        defaultZoom={mapData.zoom}
      >
        {mapData.BrewList.map((brew, index) => {
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