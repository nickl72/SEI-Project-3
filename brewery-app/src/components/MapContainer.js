import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Styled from 'styled-components';

require('dotenv').config();

const StyledMap = Styled.div`
  height: 70vh;
  width: 50%;
  border: solid brown 20px;
  border-radius: 10px;
`

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const MapContainer = (props) => {
  const [mapData, setMapData] = useState({
    center: {
      lat: 36,
      lng: -89
    },
    zoom: 11
  })

  return (
    <StyledMap>
      <GoogleMapReact 
        // todo look into other parameters to use
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={mapData.center}
        defaultZoom={mapData.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </StyledMap>
  );
}
 
export default MapContainer;